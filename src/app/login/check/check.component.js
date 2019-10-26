"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("tns-core-modules/ui/page/page");
var timer_1 = require("tns-core-modules/timer");
var nativescript_fancyalert_1 = require("nativescript-fancyalert");
var firebase = require("nativescript-plugin-firebase");
var backend_service_1 = require("~/app/shared/backend.service");
var userapi_service_1 = require("../../services/userapi.service");
var sqlite_service_1 = require("~/app/shared/services/sqlite.service");
var CheckComponent = /** @class */ (function () {
    function CheckComponent(router, page, database, userService) {
        this.router = router;
        this.page = page;
        this.database = database;
        this.userService = userService;
        this.user = {
            number: backend_service_1.BackendService.phoneNumber,
            code: '',
            validate: function () {
                if (this.code.length < 5) {
                    console.log("Código en blanco");
                    return false;
                }
                return true;
            }
        };
        this.phoneNumber = backend_service_1.BackendService.phoneNumber;
        this.countdown = 120;
        this.fails = 0;
        this.isLoggingIn = true;
        this.processing = false;
        this.page.actionBarHidden = true;
    }
    CheckComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settoken();
        this.updateCurrenTime();
        timer_1.setInterval(function () { _this.updateCurrenTime(); }, 1000);
        console.log('Este es el número: ' + backend_service_1.BackendService.phoneNumber);
        console.log('Este es el code: ' + backend_service_1.BackendService.code);
    };
    CheckComponent.prototype.ngOnChanges = function () {
        this.updateCurrenTime();
    };
    CheckComponent.prototype.updateCurrenTime = function () {
        if (this.countdown !== 0) {
            this.countdown = this.countdown - 1;
        }
    };
    CheckComponent.prototype.DownloadInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            var _this = this;
            return __generator(this, function (_a) {
                console.log(backend_service_1.BackendService.phoneNumber);
                data = {
                    cell: backend_service_1.BackendService.phoneNumber
                };
                this.userService.download(data).subscribe(function (res) {
                    var response = res;
                    if (response) {
                        if (response !== 'empty') {
                            response.data.forEach(function (element) {
                                console.log(element.badge);
                                _this.database.getdbConnection()
                                    .then(function (db) {
                                    db.execSQL("INSERT INTO badges (badge, city, soat_exp_date, tecmec_exp_date, license_exp_date, next_oil_change) VALUES (?, ?, ?, ?, ?, ?)", [element.badge, element.city, element.soat_exp_date, element.tecmec_exp_date, element.license_exp_date, element.next_oil_change]).then(function (id) {
                                        console.log("INSERT RESULT", id);
                                        _this.loadBadges();
                                    }, function (err) {
                                        console.log("INSERT ERROR", err);
                                    });
                                });
                            });
                            console.log('Cargando DB local');
                        }
                        else {
                            console.log('No hay datos');
                        }
                    }
                }, function (err) {
                    console.log(err);
                });
                return [2 /*return*/];
            });
        });
    };
    CheckComponent.prototype.loadBadges = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.badges = [];
                this.database.getdbConnection()
                    .then(function (db) {
                    db.all("SELECT * FROM badges").then(function (rows) {
                        if (rows.length > 0) {
                            for (var row in rows) {
                                _this.badges.push({
                                    "badge": rows[row][1],
                                    "city": rows[row][2],
                                    "soat_exp_date": rows[row][3],
                                    "tecmec_exp_date": rows[row][4],
                                    "license_exp_date": rows[row][5],
                                    "next_oil_change": rows[row][6]
                                });
                            }
                            _this.db = db;
                        }
                    }, function (error) {
                        console.log("SELECT ERROR", error);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CheckComponent.prototype.settoken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, firebase.getCurrentPushToken().then(function (res) { return _this.token = res; })];
                    case 1:
                        _a.sent();
                        console.log(this.token);
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckComponent.prototype.onExtractedValueChange = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            var _this = this;
            return __generator(this, function (_a) {
                // `args.value` includes only extracted characters, for instance
                // `1235551111` would be logged while the UI would display `(123) 555-1111`.
                this.user.code = args.value;
                console.log('Extracted value:', args.value);
                if (this.user.code.length > 5) {
                    this.processing = true;
                    if (!this.user.validate() || this.user.code !== String(backend_service_1.BackendService.code)) {
                        nativescript_fancyalert_1.TNSFancyAlert.showWarning("¡Ups!", "El código es incorrecto");
                        this.processing = false;
                    }
                    else {
                        data = {
                            cell: backend_service_1.BackendService.phoneNumber,
                            token: this.token
                        };
                        this.userService.checkCode(data).subscribe(function (res) {
                            if (res) {
                                backend_service_1.BackendService.token = _this.token;
                                _this.processing = false;
                                _this.DownloadInfo();
                                _this.router.navigateByUrl('home');
                                console.log(JSON.stringify(res));
                                console.log("Token actual: ", backend_service_1.BackendService.token);
                            }
                        }, function (err) {
                            console.log(err);
                            _this.user.code = '';
                            _this.processing = false;
                            nativescript_fancyalert_1.TNSFancyAlert.showError("¡Ha ocurrido un problema!", "No hemos podido verificar el código");
                        });
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    CheckComponent.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                this.processing = true;
                if (this.fails !== 3) {
                    this.processing = false;
                    nativescript_fancyalert_1.TNSFancyAlert.showSuccess("¡Mensaje Reenviado!", "El código ha sido reenviado de manera exitosa.");
                    this.countdown = 120;
                    this.fails = this.fails + 1;
                    console.log(this.fails);
                    data = {
                        cell: backend_service_1.BackendService.phoneNumber
                    };
                    this.userService.login(data).subscribe(function (res) {
                        var response = res;
                        if (response) {
                            // BackendService.token = this.token;
                            backend_service_1.BackendService.code = response.code;
                            console.log('Nuevo código: ', backend_service_1.BackendService.code);
                            //    this.router.navigate(['home',])
                        }
                    }, function (err) {
                        console.log(err);
                        nativescript_fancyalert_1.TNSFancyAlert.showError("¡Ha ocurrido un problema!", "Por favor intente más tarde");
                    });
                }
                else {
                    this.processing = false;
                    nativescript_fancyalert_1.TNSFancyAlert.showWarning("¡Ups!", "Parece que hay un problema con la recepción del código, intenta más tarde", "Vale");
                    this.fails = this.fails + 1;
                }
                return [2 /*return*/];
            });
        });
    };
    CheckComponent = __decorate([
        core_1.Component({
            selector: 'ns-check',
            templateUrl: './check.component.html',
            styleUrls: ['./check.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, page_1.Page, sqlite_service_1.SqliteService, userapi_service_1.UserapiService])
    ], CheckComponent);
    return CheckComponent;
}());
exports.CheckComponent = CheckComponent;
