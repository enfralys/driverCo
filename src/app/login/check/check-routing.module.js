"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var check_component_1 = require("./check.component");
var routes = [
    { path: "", component: check_component_1.CheckComponent }
];
var CheckRoutingModule = /** @class */ (function () {
    function CheckRoutingModule() {
    }
    CheckRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], CheckRoutingModule);
    return CheckRoutingModule;
}());
exports.CheckRoutingModule = CheckRoutingModule;
