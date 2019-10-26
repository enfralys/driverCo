"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var app = require("tns-core-modules/application");
var sqlite_service_1 = require("../shared/services/sqlite.service");
var userapi_service_1 = require("../services/userapi.service");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_cardview_1 = require("@nstudio/nativescript-cardview");
var shared_1 = require("../shared");
var router_1 = require("nativescript-angular/router");
//SQLite library
var Sqlite = require("nativescript-sqlite");
element_registry_1.registerElement("CardView", function () { return nativescript_cardview_1.CardView; });
var BadgesComponent = /** @class */ (function () {
    function BadgesComponent(_page, userapi, database, router) {
        this._page = _page;
        this.userapi = userapi;
        this.database = database;
        this.router = router;
        this.cantidad = false;
        // Use the component constructor to inject providers.
    }
    BadgesComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        this.selectBadges();
    };
    BadgesComponent.prototype.setdetail = function (obj) {
        this.userapi.setobDetail(obj);
        this.router.navigate(['featured'], {
            animated: true,
            transition: {
                name: "slide",
                duration: 380,
                curve: "easeIn"
            }
        });
    };
    BadgesComponent.prototype.test = function () {
        console.log("only a test");
        shared_1.BackendService.upload = true;
    };
    BadgesComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    BadgesComponent.prototype.selectBadges = function () {
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
                                    "next_oil_change": rows[row][6],
                                    "soat_img": rows[row][7],
                                    "tecmec_img": rows[row][8],
                                    "license_img": rows[row][9],
                                });
                            }
                            _this.db = db;
                            _this.cantidad = true;
                            console.log("busco en la bd");
                        }
                    }, function (error) {
                        console.log("SELECT ERROR", error);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    BadgesComponent.prototype.addBadge = function () {
        this.router.navigate(['addplaca'], {
            animated: true,
            transition: {
                name: "slideTop",
                duration: 380,
                curve: "easeIn"
            }
        });
    };
    BadgesComponent = __decorate([
        core_1.Component({
            selector: "Badges",
            moduleId: module.id,
            templateUrl: "./badges.component.html",
            styleUrls: ['./badges.component.scss']
        }),
        __metadata("design:paramtypes", [page_1.Page, userapi_service_1.UserapiService, sqlite_service_1.SqliteService, router_1.RouterExtensions])
    ], BadgesComponent);
    return BadgesComponent;
}());
exports.BadgesComponent = BadgesComponent;
