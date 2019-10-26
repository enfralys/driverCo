"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var operators_1 = require("rxjs/operators");
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var router_1 = require("@angular/router");
var nativescript_ui_sidedrawer_1 = require("nativescript-ui-sidedrawer");
var backend_service_1 = require("./shared/backend.service");
var Connectivity = require("tns-core-modules/connectivity");
var AppComponent = /** @class */ (function () {
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
            .then(function (db) {
            db.execSQL("CREATE TABLE IF NOT EXISTS badges ( id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT , badge TEXT NOT NULL , city TEXT NOT NULL, soat_exp_date NUMERIC, tecmec_exp_date NUMERIC, license_exp_date NUMERIC, next_oil_change NUMERIC, soat_img TEXT, tecmec_img TEXT, license_img TEXT)").then(function () {
            }, function (error) {
                console.log("CREATE TABLE ERROR", error);
            });
        }, function (error) {
            console.log("OPEN DB ERROR", error);
        });
        setInterval(function () {
            _this.checkInternet();
            if (backend_service_1.BackendService.upload === true) {
                _this.loadBadges();
            }
            console.log("Funcionando...");
        }, 30000);
        backend_service_1.BackendService.upload = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('test');
        console.log(this.socketIO.connect());
        this._activatedUrl = "/home";
        this._sideDrawerTransition = new nativescript_ui_sidedrawer_1.SlideInOnTopTransition();
        this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
            .subscribe(function (event) { return _this._activatedUrl = event.urlAfterRedirects; });
        setInterval(function () {
            _this.loadBadges();
        }, 10000);
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.socketIO.disconnect();
    };
    AppComponent.prototype.logOut = function () {
        console.log(backend_service_1.BackendService.token);
        backend_service_1.BackendService.token = "";
        console.log(backend_service_1.BackendService.token, "mamadas");
        this.routerExtensions.navigate(['/login'], {
            transition: {
                name: "fade"
            }
        });
    };
    AppComponent.prototype.loadBadges = function () {
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
                                    "cell": backend_service_1.BackendService.phoneNumber
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
    AppComponent.prototype.connectionToString = function (connectionType) {
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
    AppComponent.prototype.checkInternet = function () {
        var _this = this;
        this.connectionType = this.connectionToString(Connectivity.getConnectionType());
        Connectivity.startMonitoring(function (connectionType) {
            _this.zone.run(function () {
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
            this.userService.upload(data).subscribe(function (res) {
                if (res) {
                    console.log(JSON.stringify(res));
                    backend_service_1.BackendService.upload = false;
                }
            }, function (err) {
                console.log(err);
                backend_service_1.BackendService.upload = false;
            });
            console.log("Estado posterior a la subida: ", backend_service_1.BackendService.upload);
        }
    };
    Object.defineProperty(AppComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.isComponentSelected = function (url) {
        return this._activatedUrl === url;
    };
    AppComponent.prototype.onNavItemTap = function (navItemRoute) {
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
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
