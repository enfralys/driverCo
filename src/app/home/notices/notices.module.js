"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var notices_routing_module_1 = require("./notices-routing.module");
var notices_component_1 = require("./notices.component");
var NoticesModule = /** @class */ (function () {
    function NoticesModule() {
    }
    NoticesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                notices_routing_module_1.NoticesRoutingModule
            ],
            declarations: [
                notices_component_1.NoticesComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], NoticesModule);
    return NoticesModule;
}());
exports.NoticesModule = NoticesModule;
