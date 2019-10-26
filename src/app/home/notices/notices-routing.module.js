"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var notices_component_1 = require("./notices.component");
var routes = [
    { path: "", component: notices_component_1.NoticesComponent }
];
var NoticesRoutingModule = /** @class */ (function () {
    function NoticesRoutingModule() {
    }
    NoticesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], NoticesRoutingModule);
    return NoticesRoutingModule;
}());
exports.NoticesRoutingModule = NoticesRoutingModule;
