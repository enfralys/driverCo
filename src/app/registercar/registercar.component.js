"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var RegisterCarComponent = /** @class */ (function () {
    function RegisterCarComponent() {
        // Use the component constructor to inject providers.
    }
    RegisterCarComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    RegisterCarComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    RegisterCarComponent = __decorate([
        core_1.Component({
            selector: "registercar",
            templateUrl: "./registercar.component.html",
            styleUrls: ['./registercar.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], RegisterCarComponent);
    return RegisterCarComponent;
}());
exports.RegisterCarComponent = RegisterCarComponent;
