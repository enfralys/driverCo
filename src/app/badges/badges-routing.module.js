"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var badges_component_1 = require("./badges.component");
var routes = [
    { path: "", component: badges_component_1.BadgesComponent }
];
var BadgesRoutingModule = /** @class */ (function () {
    function BadgesRoutingModule() {
    }
    BadgesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], BadgesRoutingModule);
    return BadgesRoutingModule;
}());
exports.BadgesRoutingModule = BadgesRoutingModule;
