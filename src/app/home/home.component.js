"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_cardview_1 = require("@nstudio/nativescript-cardview");
var app = require("tns-core-modules/application");
var userapi_service_1 = require("../services/userapi.service");
var router_1 = require("nativescript-angular/router");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("CardView", function () { return nativescript_cardview_1.CardView; });
var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadNotices();
    };
    HomeComponent.prototype.setdetail = function (obj) {
        this.userService.setobDetail(obj);
        console.log(obj);
        this.router.navigate(['notices'], {
            animated: true,
            transition: {
                name: "slide",
                duration: 380,
                curve: "easeIn"
            }
        });
    };
    HomeComponent.prototype.loadNotices = function () {
        var _this = this;
        this.userService.getNews().subscribe(function (res) {
            var response = res;
            _this.news = response.data;
        }, function (err) {
            console.log(err);
        });
    };
    HomeComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ["./home.component.scss"]
        }),
        __metadata("design:paramtypes", [userapi_service_1.UserapiService, router_1.RouterExtensions])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
