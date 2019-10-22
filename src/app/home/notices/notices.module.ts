import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { NoticesRoutingModule } from "./notices-routing.module";
import { NoticesComponent } from "./notices.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NoticesRoutingModule
    ],
    declarations: [
        NoticesComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NoticesModule { }
