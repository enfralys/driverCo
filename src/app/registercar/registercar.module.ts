import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RegisterCarRoutingModule } from "./registercar-routing.module";
import { RegisterCarComponent} from "./registercar.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
       RegisterCarRoutingModule
    ],
    declarations: [
        RegisterCarComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RegisterCarModule { }
