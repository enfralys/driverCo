import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/chat", pathMatch: "full" },
    { path: "login", loadChildren: "~/app/login/login.module#LoginModule" },
    { path: "login-check", loadChildren: "~/app/login/check/check.module#CheckModule" },
    { path: "addplaca", loadChildren: "~/app/addplaca/addplaca.module#AddplacaModule"},
    { path: "badges", loadChildren: "~/app/badges/badges.module#BadgesModule"},
    { path: "chat", loadChildren: "~/app/chat/chat.module#ChatModule"},

    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "notices", loadChildren: "~/app/home/notices/notices.module#NoticesModule" },
    { path: "browse", loadChildren: "~/app/browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "~/app/search/search.module#SearchModule" },
    { path: "featured", loadChildren: "~/app/featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
