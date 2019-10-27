"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var forms_1 = require("nativescript-angular/forms");
var angular_2 = require("nativescript-datetimepicker/angular");
var angular_3 = require("nativescript-socketio/angular");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var router_1 = require("nativescript-angular/router");
var http_1 = require("@angular/common/http");
var register_component_1 = require("./register/register.component");
var angular_4 = require("nativescript-input-mask/angular");
var angular_5 = require("nativescript-ui-listview/angular");
var server = 'http://138.68.31.167:4444';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent,
            ],
            imports: [
                angular_4.InputMaskModule,
                http_1.HttpClientModule,
                angular_3.SocketIOModule.forRoot(server),
                app_routing_module_1.AppRoutingModule,
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                router_1.NativeScriptRouterModule,
                angular_5.NativeScriptUIListViewModule,
                angular_1.NativeScriptUISideDrawerModule,
                angular_2.NativeScriptDateTimePickerModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                register_component_1.RegisterComponent,
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            providers: [
                common_1.DatePipe
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
