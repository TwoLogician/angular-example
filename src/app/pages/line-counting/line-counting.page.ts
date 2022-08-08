import { Component, OnInit } from "@angular/core"

class LineInfo {
    count = 0
    texts: string[] = []
}

@Component({
    templateUrl: "./line-counting.page.html"
})
export class LineCountingPage implements OnInit {

    line = new LineInfo()

    getP() {
        return document.getElementById("p")
    }

    ngOnInit() {
        this.setText()

        this.setLineInfo()
        window.addEventListener("resize", () => {
            this.setLineInfo()
        });
    }

    setLineInfo() {
        let currentLine = -1
        let currentOffsetTop = 0
        let p = this.getP()
        let texts: string[] = []
        p.childNodes.forEach((x: any) => {
            if (currentOffsetTop != x.offsetTop) {
                currentLine++
                currentOffsetTop = x.offsetTop
            }
            if (texts[currentLine] == undefined) {
                texts[currentLine] = ""
            }
            texts[currentLine] += x.innerText
        })
        this.line.count = texts.length
        this.line.texts = texts
    }

    setText() {
        let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel lacinia arcu, eget laoreet est. Suspendisse eget dictum ex, vel lobortis erat. Aliquam posuere ipsum in sagittis pharetra. Mauris sit amet auctor lacus, maximus dictum odio. Quisque nec condimentum erat. Maecenas varius consequat mi, at lobortis leo blandit eu. Vivamus rutrum velit massa, sit amet lacinia odio faucibus vel. Sed sed scelerisque enim, eget volutpat arcu. Sed sagittis velit lorem, sit amet elementum enim tempus et. Mauris fermentum mattis tempus. Proin vel gravida nibh, eget tempor odio."

        let charSpans = [...text].map(x => `<span>${x}</span>`)
        text = charSpans.join("")
        let p = this.getP()
        p.innerHTML = text
    }
}