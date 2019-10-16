import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CheckRoutingModule } from "./check-routing.module";
import { CheckComponent } from "./check.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CheckRoutingModule
    ],
    declarations: [
        CheckComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class CheckModule { }
