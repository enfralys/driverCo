"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", loadChildren: "~/app/login/login.module#LoginModule" },
    { path: "login-check", loadChildren: "~/app/login/check/check.module#CheckModule" },
    { path: "addplaca", loadChildren: "~/app/addplaca/addplaca.module#AddplacaModule" },
    { path: "badges", loadChildren: "~/app/badges/badges.module#BadgesModule" },
    { path: "chat", loadChildren: "~/app/chat/chat.module#ChatModule" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "notices", loadChildren: "~/app/home/notices/notices.module#NoticesModule" },
    { path: "browse", loadChildren: "~/app/browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "~/app/search/search.module#SearchModule" },
    { path: "featured", loadChildren: "~/app/featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
