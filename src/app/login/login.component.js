"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = require("../shared");
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var userapi_service_1 = require("../services/userapi.service");
var router_1 = require("nativescript-angular/router");
var nativescript_fancyalert_1 = require("nativescript-fancyalert");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(page, router, userService) {
        this.page = page;
        this.router = router;
        this.userService = userService;
        this.isLoggingIn = true;
        this.processing = false;
        this.page.actionBarHidden = true;
        this.user = new shared_1.User();
        this.user.number = "";
        this.user.name = "";
        if (shared_1.BackendService.token !== "" && shared_1.BackendService.token !== undefined) {
            this.router.navigate(['home',], {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 380,
                    curve: "easeIn"
                }
            });
        }
        console.log("Token actual: ", shared_1.BackendService.token);
    }
    LoginComponent.prototype.onExtractedValueChange = function (args) {
        // `args.value` includes only extracted characters, for instance
        // `1235551111` would be logged while the UI would display `(123) 555-1111`.
        this.user.number = args.value;
        // console.log('Extracted value:', args.value);
        // console.log('Número en variable: ', this.user.number)
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            var _this = this;
            return __generator(this, function (_a) {
                this.processing = true;
                // await firebase.getCurrentPushToken().then(res => BackendService.token = res);
                // console.log("Verificación de código: ", BackendService.token)
                if (!this.user.validate()) {
                    nativescript_fancyalert_1.TNSFancyAlert.showWarning("¡Ha ocurrido un problema!", "El número no es válido");
                    this.processing = false;
                }
                else {
                    data = {
                        cell: this.user.number
                    };
                    this.userService.login(data).subscribe(function (res) {
                        var response = res;
                        if (response) {
                            // BackendService.token = this.token;
                            shared_1.BackendService.phoneNumber = _this.user.number;
                            shared_1.BackendService.code = response.code;
                            _this.processing = false;
                            _this.router.navigate(['login-check',], {
                                animated: true,
                                transition: {
                                    name: "slide",
                                    duration: 380,
                                    curve: "easeIn"
                                }
                            });
                        }
                        else {
                            nativescript_fancyalert_1.TNSFancyAlert.showError("¡Ha ocurrido un problema!", "El servidor no se encuentra disponible");
                            _this.processing = false;
                        }
                    }, function (err) {
                        console.log(err);
                        nativescript_fancyalert_1.TNSFancyAlert.showError("¡Ha ocurrido un problema!", "Por favor intente más tarde");
                        _this.processing = false;
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'ns-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.RouterExtensions, userapi_service_1.UserapiService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
