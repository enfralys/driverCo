"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page_1 = require("tns-core-modules/ui/page");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var userapi_service_1 = require("~/app/services/userapi.service");
var NoticesComponent = /** @class */ (function () {
    function NoticesComponent(_page, userapi, router) {
        this._page = _page;
        this.userapi = userapi;
        this.router = router;
    }
    NoticesComponent.prototype.ngOnInit = function () {
        this.getdetail();
    };
    NoticesComponent.prototype.getdetail = function () {
        this.new = this.userapi.getobDetail();
        console.log('Este es el array: ', this.new);
    };
    NoticesComponent.prototype.onScroll = function (event, scrollView, topView) {
        // If the header content is still visiible
        // console.log(scrollView.verticalOffset);
        if (scrollView.verticalOffset < 250) {
            var offset = scrollView.verticalOffset / 2;
            if (scrollView.ios) {
                // iOS adjust the position with an animation to create a smother scrolling effect.
                topView.animate({ translate: { x: 0, y: offset } }).then(function () { }, function () { });
            }
            else {
                // Android, animations are jerky so instead just adjust the position without animation.
                topView.translateY = Math.floor(offset);
            }
        }
    };
    NoticesComponent.prototype.onDrawerButtonTap = function () {
        this.router.navigate(['home'], {
            animated: true,
            transition: {
                name: "slideRight",
                duration: 380,
                curve: "easeIn"
            }
        });
    };
    NoticesComponent = __decorate([
        core_1.Component({
            selector: 'ns-notices',
            templateUrl: './notices.component.html',
            styleUrls: ['./notices.component.scss']
        }),
        __metadata("design:paramtypes", [page_1.Page, userapi_service_1.UserapiService, router_1.RouterExtensions])
    ], NoticesComponent);
    return NoticesComponent;
}());
exports.NoticesComponent = NoticesComponent;
