import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptDateTimePickerModule } from "nativescript-datetimepicker/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { floatBtnComponent } from "./home/floatbutton.component";
//import { LoginComponent } from "./login/login.component";
//import { LogCComponent } from "./login/log-c/log-c.component";
//import { AddPlacaComponent } from "./add-placa/add-placa.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { AddplacaComponent } from './addplaca/addplaca.component';
import { RegisterComponent } from './register/register.component';
import { CheckComponent } from "./login/check/check.component";

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
        NativeScriptDateTimePickerModule
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
    ]
})
export class AppModule { }
