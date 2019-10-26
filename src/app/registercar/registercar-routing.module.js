"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var registercar_component_1 = require("./registercar.component");
var routes = [
    { path: "", component: registercar_component_1.RegisterCarComponent }
];
var RegisterCarRoutingModule = /** @class */ (function () {
    function RegisterCarRoutingModule() {
    }
    RegisterCarRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], RegisterCarRoutingModule);
    return RegisterCarRoutingModule;
}());
exports.RegisterCarRoutingModule = RegisterCarRoutingModule;
