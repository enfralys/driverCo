"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var sqlite_service_1 = require("../shared/services/sqlite.service");
var backend_service_1 = require("../shared/backend.service");
var userapi_service_1 = require("../services/userapi.service");
var nativescript_fancyalert_1 = require("nativescript-fancyalert");
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(database, userService) {
        this.database = database;
        this.userService = userService;
        // Use the component constructor to inject providers.
    }
    SettingsComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        this.loadBadges();
    };
    SettingsComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    SettingsComponent.prototype.loadBadges = function () {
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
    SettingsComponent.prototype.submit = function () {
        var data = {
            badge: this.badges
        };
        console.log(data.badge);
        this.userService.upload(data).subscribe(function (res) {
            if (res) {
                console.log(JSON.stringify(res));
            }
        }, function (err) {
            console.log(err);
            nativescript_fancyalert_1.TNSFancyAlert.showError("¡Ha ocurrido un problema!", "No se ha podido sincronizar");
        });
    };
    SettingsComponent.prototype.DownloadInfo = function () {
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
    SettingsComponent = __decorate([
        core_1.Component({
            selector: "Settings",
            moduleId: module.id,
            templateUrl: "./settings.component.html"
        }),
        __metadata("design:paramtypes", [sqlite_service_1.SqliteService, userapi_service_1.UserapiService])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
