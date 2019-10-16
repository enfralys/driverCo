import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { CheckComponent } from "./check.component";

const routes: Routes = [
  { path: "", component: CheckComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class CheckRoutingModule {
}
