import { Component, OnDestroy, OnInit } from "@angular/core"
import { Editor, toDoc, toHTML } from "ngx-editor"

@Component({
    templateUrl: "./ngx-editor.page.html"
})
export class NgxEditorPage implements OnInit, OnDestroy {

    editor = new Editor()
    html = ""

    addImgId() {
        let doc: any = toDoc(this.html)
        this.findThenAdd(doc.content)
        this.html = toHTML(doc)
    }

    findThenAdd(contents: any[]) {
        contents.forEach(x => {
            if (x.content) {
                this.findThenAdd(x.content)
            }
            if (x.type == "image") {
                x.attrs.id = x.attrs.title
            }
        })
    }

    ngOnDestroy() {
        this.editor.destroy()
    }

    ngOnInit() {
        this.editor = new Editor()
    }
}