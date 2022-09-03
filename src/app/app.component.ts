import { Component } from "@angular/core"
import { LinkInfo } from "./models"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  links: LinkInfo[] = [
    { routerLink: "/line-counting", text: "Line Counting" },
    { routerLink: "ngx-editor", text: "Ngx Editor" },
  ]

  responsive = false

  toggleResponsive() {
    this.responsive = !this.responsive
  }
}
