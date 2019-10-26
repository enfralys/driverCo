import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ChatRoutingModule } from "./chat-routing.module";
import { ChatComponent } from "./chat.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ChatRoutingModule,NativeScriptFormsModule
    ],
    declarations: [
        ChatComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class ChatModule { }
