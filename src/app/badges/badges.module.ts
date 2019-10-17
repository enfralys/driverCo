import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { BadgesRoutingModule } from "./badges-routing.module";
import { BadgesComponent } from "./badges.component";
import { floatBtnComponent } from "../badges/floatbutton.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        BadgesRoutingModule
    ],
    declarations: [
        BadgesComponent,
        floatBtnComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class BadgesModule { }
