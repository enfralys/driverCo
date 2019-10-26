"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var addplaca_routing_module_1 = require("./addplaca-routing.module");
var addplaca_component_1 = require("./addplaca.component");
var AddplacaModule = /** @class */ (function () {
    function AddplacaModule() {
    }
    AddplacaModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                addplaca_routing_module_1.AddPlacaRoutingModule
            ],
            declarations: [
                addplaca_component_1.AddplacaComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AddplacaModule);
    return AddplacaModule;
}());
exports.AddplacaModule = AddplacaModule;
