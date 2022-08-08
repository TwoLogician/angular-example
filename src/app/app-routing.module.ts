import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"

import { LineCountingPage } from "./pages"

const routes: Routes = [
  { component: LineCountingPage, path: "line-counting" },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
