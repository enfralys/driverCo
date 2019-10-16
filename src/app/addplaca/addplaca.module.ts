import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { AddPlacaRoutingModule } from "./addplaca-routing.module";
import { AddplacaComponent } from "./addplaca.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AddPlacaRoutingModule
    ],
    declarations: [
        AddplacaComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AddplacaModule { }
