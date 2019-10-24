import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { DatePipe } from '@angular/common';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptDateTimePickerModule } from "nativescript-datetimepicker/angular";
import { SocketIOModule } from "nativescript-socketio/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HttpClientModule } from "@angular/common/http";
import { RegisterComponent } from './register/register.component';

import { InputMaskModule } from 'nativescript-input-mask/angular';
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
let server = 'http://138.68.31.167:4444';
@NgModule({
    bootstrap: [
        AppComponent,
    ],
    imports: [
        InputMaskModule,
        HttpClientModule,
        SocketIOModule.forRoot(server),
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptUIListViewModule,
        NativeScriptUISideDrawerModule,
        NativeScriptDateTimePickerModule,
    ],
    declarations: [
        AppComponent,
        RegisterComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        DatePipe
    ]
})
export class AppModule { }
