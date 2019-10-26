"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var registercar_routing_module_1 = require("./registercar-routing.module");
var registercar_component_1 = require("./registercar.component");
var RegisterCarModule = /** @class */ (function () {
    function RegisterCarModule() {
    }
    RegisterCarModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                registercar_routing_module_1.RegisterCarRoutingModule
            ],
            declarations: [
                registercar_component_1.RegisterCarComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], RegisterCarModule);
    return RegisterCarModule;
}());
exports.RegisterCarModule = RegisterCarModule;
