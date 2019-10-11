import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptDateTimePickerModule } from "nativescript-datetimepicker/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { floatBtnComponent } from "./home/floatbutton.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { AddplacaComponent } from './addplaca/addplaca.component';
import { RegisterComponent } from './register/register.component';
import { CheckComponent } from "./login/check/check.component";

import { InputMaskModule } from 'nativescript-input-mask/angular';
import { InternetConnectionService } from "./shared/services/internet-connection.service";

@NgModule({
    bootstrap: [
        AppComponent,
    ],
    imports: [
        HttpClientModule,
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptUISideDrawerModule,
        NativeScriptDateTimePickerModule,
        InputMaskModule,
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        AddplacaComponent,
        RegisterComponent,
        CheckComponent
        //LoginComponent,

        //LogCComponent,

      //  AddPlacaComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        InternetConnectionService
    ]
})
export class AppModule { }
