import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser"
import { NgxEditorModule } from "ngx-editor"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { pages } from "./pages"

@NgModule({
  declarations: [
    AppComponent,
    pages,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgxEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
