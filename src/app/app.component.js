"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var router_1 = require("@angular/router");
var nativescript_ui_sidedrawer_1 = require("nativescript-ui-sidedrawer");
var sqlite_service_1 = require("./shared/services/sqlite.service");
var backend_service_1 = require("./shared/backend.service");
var Connectivity = require("tns-core-modules/connectivity");
var userapi_service_1 = require("./services/userapi.service");
var nativescript_socketio_1 = require("nativescript-socketio");
var AppComponent = /** @class */ (function() {
    function AppComponent(socketIO, router, routerExtensions, database, zone, userService) {
        // Use the component constructor to inject services.
        var _this = this;
        this.socketIO = socketIO;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.database = database;
        this.zone = zone;
        this.userService = userService;
        this.imageAssets = [];
        this.isSingleMode = true;
        this.thumbSize = 80;
        this.previewSize = 300;
        this.database.getdbConnection()
            .then(function(db) {
                db.execSQL("CREATE TABLE IF NOT EXISTS badges ( id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT , badge TEXT NOT NULL , city TEXT NOT NULL, soat_exp_date NUMERIC, tecmec_exp_date NUMERIC, license_exp_date NUMERIC, next_oil_change NUMERIC, soat_img TEXT, tecmec_img TEXT, license_img TEXT)").then(function() {}, function(error) {
                    console.log("CREATE TABLE ERROR", error);
                });
            }, function(error) {
                console.log("OPEN DB ERROR", error);
            });
        setInterval(function() {
            _this.checkInternet();
            if (backend_service_1.BackendService.upload === true) {
                _this.loadBadges();
            }
            console.log("Funcionando...");
        }, 30000);
        backend_service_1.BackendService.upload = false;
    }
    AppComponent.prototype.ngOnInit = function() {
        var _this = this;
        console.log('test');
        console.log(this.socketIO.connect());
        this._activatedUrl = "/home";
        this._sideDrawerTransition = new nativescript_ui_sidedrawer_1.SlideInOnTopTransition();
        this.router.events
            .pipe(operators_1.filter(function(event) { return event instanceof router_1.NavigationEnd; }))
            .subscribe(function(event) { return _this._activatedUrl = event.urlAfterRedirects; });
        setInterval(function() {
            _this.loadBadges();
        }, 10000);
    };
    AppComponent.prototype.ngOnDestroy = function() {
        this.socketIO.disconnect();
    };
    AppComponent.prototype.logOut = function() {
        console.log(backend_service_1.BackendService.token);
        backend_service_1.BackendService.token = "";
        console.log(backend_service_1.BackendService.token, "mamadas");
        this.routerExtensions.navigate(['/login'], {
            transition: {
                name: "fade"
            }
        });
    };
    AppComponent.prototype.loadBadges = function() {
        return __awaiter(this, void 0, void 0, function() {
            var _this = this;
            return __generator(this, function(_a) {
                this.badges = [];
                this.database.getdbConnection()
                    .then(function(db) {
                        db.all("SELECT * FROM badges").then(function(rows) {
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
                                        "cell": backend_service_1.BackendService.phoneNumber
                                    });
                                }
                                _this.db = db;
                            }
                        }, function(error) {
                            console.log("SELECT ERROR", error);
                        });
                    });
                return [2 /*return*/ ];
            });
        });
    };
    AppComponent.prototype.connectionToString = function(connectionType) {
        switch (connectionType) {
            case Connectivity.connectionType.none:
                return "0";
            case Connectivity.connectionType.wifi:
                return "1";
            case Connectivity.connectionType.mobile:
                return "2";
            default:
                return "3";
        }
    };
    AppComponent.prototype.checkInternet = function() {
        var _this = this;
        this.connectionType = this.connectionToString(Connectivity.getConnectionType());
        Connectivity.startMonitoring(function(connectionType) {
            _this.zone.run(function() {
                _this.connectionType = _this.connectionToString(connectionType);
            });
        });
        console.log("Estado de subida: ", backend_service_1.BackendService.upload);
        console.log("Estado de conexión: ", this.connectionType);
        if (this.connectionType !== '0' && backend_service_1.BackendService.upload === true) {
            console.log("Hay conexión, se sube");
            var data = {
                badge: this.badges
            };
            console.log(data);
            this.userService.upload(data).subscribe(function(res) {
                if (res) {
                    console.log(JSON.stringify(res));
                    backend_service_1.BackendService.upload = false;
                }
            }, function(err) {
                console.log(err);
                backend_service_1.BackendService.upload = false;
            });
            console.log("Estado posterior a la subida: ", backend_service_1.BackendService.upload);
        }
    };
    Object.defineProperty(AppComponent.prototype, "sideDrawerTransition", {
        get: function() {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.isComponentSelected = function(url) {
        return this._activatedUrl === url;
    };
    AppComponent.prototype.onNavItemTap = function(navItemRoute) {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
        var sideDrawer = app.getRootView();
        sideDrawer.closeDrawer();
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-app",
            templateUrl: "app.component.html"
        }),
        __metadata("design:paramtypes", [nativescript_socketio_1.SocketIO, router_1.Router, router_2.RouterExtensions, sqlite_service_1.SqliteService, core_1.NgZone, userapi_service_1.UserapiService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;