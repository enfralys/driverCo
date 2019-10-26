"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var badges_routing_module_1 = require("./badges-routing.module");
var badges_component_1 = require("./badges.component");
var floatbutton_component_1 = require("../badges/floatbutton.component");
var BadgesModule = /** @class */ (function () {
    function BadgesModule() {
    }
    BadgesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                badges_routing_module_1.BadgesRoutingModule
            ],
            declarations: [
                badges_component_1.BadgesComponent,
                floatbutton_component_1.floatBtnComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], BadgesModule);
    return BadgesModule;
}());
exports.BadgesModule = BadgesModule;
