"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var check_routing_module_1 = require("./check-routing.module");
var check_component_1 = require("./check.component");
var CheckModule = /** @class */ (function () {
    function CheckModule() {
    }
    CheckModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                check_routing_module_1.CheckRoutingModule
            ],
            declarations: [
                check_component_1.CheckComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], CheckModule);
    return CheckModule;
}());
exports.CheckModule = CheckModule;
