"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var addplaca_component_1 = require("./addplaca.component");
var routes = [
    { path: "", component: addplaca_component_1.AddplacaComponent }
];
var AddPlacaRoutingModule = /** @class */ (function () {
    function AddPlacaRoutingModule() {
    }
    AddPlacaRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AddPlacaRoutingModule);
    return AddPlacaRoutingModule;
}());
exports.AddPlacaRoutingModule = AddPlacaRoutingModule;
