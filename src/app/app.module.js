"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var forms_1 = require("nativescript-angular/forms");
var angular_2 = require("nativescript-datetimepicker/angular");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
//import { LoginComponent } from "./login/login.component";
//import { LogCComponent } from "./login/log-c/log-c.component";
//import { AddPlacaComponent } from "./add-placa/add-placa.component";
var router_1 = require("nativescript-angular/router");
var http_1 = require("@angular/common/http");
var login_component_1 = require("./login/login.component");
var addplaca_component_1 = require("./addplaca/addplaca.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent,
            ],
            imports: [
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                router_1.NativeScriptRouterModule,
                angular_1.NativeScriptUISideDrawerModule,
                angular_2.NativeScriptDateTimePickerModule
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                addplaca_component_1.AddplacaComponent,
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDhEQUFvRjtBQUNwRixvREFBcUU7QUFDckUsK0RBQXVGO0FBRXZGLDJEQUF3RDtBQUN4RCxpREFBK0M7QUFFL0MsMkRBQTJEO0FBQzNELGdFQUFnRTtBQUNoRSxzRUFBc0U7QUFDdEUsc0RBQXVFO0FBQ3ZFLDZDQUF3RDtBQUN4RCwyREFBeUQ7QUFDekQsb0VBQWtFO0FBNkJsRTtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBM0JyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7Z0JBQ2hCLHFDQUFnQjtnQkFDaEIsd0NBQWtCO2dCQUNsQiwrQkFBdUI7Z0JBQ3ZCLGlDQUF3QjtnQkFDeEIsd0NBQThCO2dCQUM5QiwwQ0FBZ0M7YUFDbkM7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osZ0NBQWM7Z0JBQ2Qsc0NBQWlCO2FBTXBCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHREYXRlVGltZVBpY2tlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZGF0ZXRpbWVwaWNrZXIvYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBmbG9hdEJ0bkNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvZmxvYXRidXR0b24uY29tcG9uZW50XCI7XG4vL2ltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9naW4vbG9naW4uY29tcG9uZW50XCI7XG4vL2ltcG9ydCB7IExvZ0NDb21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi9sb2ctYy9sb2ctYy5jb21wb25lbnRcIjtcbi8vaW1wb3J0IHsgQWRkUGxhY2FDb21wb25lbnQgfSBmcm9tIFwiLi9hZGQtcGxhY2EvYWRkLXBsYWNhLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZGRwbGFjYUNvbXBvbmVudCB9IGZyb20gJy4vYWRkcGxhY2EvYWRkcGxhY2EuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0RGF0ZVRpbWVQaWNrZXJNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICBBZGRwbGFjYUNvbXBvbmVudCxcbiAgICAgICAgLy9Mb2dpbkNvbXBvbmVudCxcbiAgICAgICBcbiAgICAgICAgLy9Mb2dDQ29tcG9uZW50LFxuICAgICAgIFxuICAgICAgLy8gIEFkZFBsYWNhQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==