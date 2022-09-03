import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { LineCountingPage, NgxEditorPage } from "./pages"

const routes: Routes = [
  { component: LineCountingPage, path: "line-counting" },
  { component: NgxEditorPage, path: "ngx-editor" },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

