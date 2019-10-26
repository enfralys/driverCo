"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_fancyalert_1 = require("nativescript-fancyalert");
var backend_service_1 = require("../shared/backend.service");
var router_1 = require("nativescript-angular/router");
var sqlite_service_1 = require("../shared/services/sqlite.service");
var imagepicker = require("nativescript-imagepicker");
var AddplacaComponent = /** @class */ (function () {
    function AddplacaComponent(router, database) {
        this.router = router;
        this.database = database;
        this.server = "http://138.68.31.167:5000";
        //vars
        this.badge = "";
        this.processing = false;
        this.minDate = new Date(1975, 0, 29);
        this.maxDate = new Date(2045, 4, 12);
        this.items = ['Bogota', 'Cali', 'Envigado', 'Medellin'];
        this.imageAssets = [];
        this.isSingleMode = true;
        this.thumbSize = 80;
        this.previewSize = 300;
    }
    AddplacaComponent.prototype.ngOnInit = function () {
    };
    AddplacaComponent.prototype.onSelectSingleTap = function () {
        this.isSingleMode = true;
        var context = imagepicker.create({
            mode: "single"
        });
        this.startSelection(context);
    };
    AddplacaComponent.prototype.startSelection = function (context) {
        var that = this;
        context
            .authorize()
            .then(function () {
            that.imageAssets = [];
            that.imageSrc = null;
            return context.present();
        })
            .then(function (selection) {
            console.log("Selection done: " + JSON.stringify(selection));
            that.imageSrc = that.isSingleMode && selection.length > 0 ? selection[0] : null;
            // set the images to be loaded from the assets with optimal sizes (optimize memory usage)
            selection.forEach(function (element) {
                element.options.width = that.isSingleMode ? that.previewSize : that.thumbSize;
                element.options.height = that.isSingleMode ? that.previewSize : that.thumbSize;
            });
            that.imageAssets = selection;
        }).catch(function (e) {
            console.log(e);
        });
    };
    AddplacaComponent.prototype.onSelectedIndexChanged = function (args) {
        var picker = args.object;
        this.city = this.items[picker.selectedIndex];
        // console.log(this.city)
        // console.log(`index: ${picker.selectedIndex}; item" ${this.items[picker.selectedIndex]}`);
    };
    AddplacaComponent.prototype.soat = function (args) {
        var date = args.value.toString();
        var arr = new Array();
        arr = date.split(" ");
        var month = this.getMonthFromString(arr[1]);
        var fullDate = arr[3] + "-" + month + "-" + arr[2];
        this.soat_exp_date = fullDate;
        // console.log(fullDate)
        // console.log("Date New value: " + args.value);
        // console.log("Date value: " + args.oldValue);
    };
    AddplacaComponent.prototype.tecnoMech = function (args) {
        var date = args.value.toString();
        var arr = new Array();
        arr = date.split(" ");
        var month = this.getMonthFromString(arr[1]);
        var fullDate = arr[3] + "-" + month + "-" + arr[2];
        this.tecmec_exp_date = fullDate;
        // console.log(fullDate)
        // console.log("Date New value: " + args.value);
        // console.log("Date value: " + args.oldValue);
    };
    AddplacaComponent.prototype.license = function (args) {
        var date = args.value.toString();
        var arr = new Array();
        arr = date.split(" ");
        var month = this.getMonthFromString(arr[1]);
        var fullDate = arr[3] + "-" + month + "-" + arr[2];
        this.license_exp_date = fullDate;
        // console.log(fullDate)
        // console.log("Date New value: " + args.value);
        // console.log("Date value: " + args.oldValue);
    };
    AddplacaComponent.prototype.oilChange = function (args) {
        var date = args.value.toString();
        var arr = new Array();
        arr = date.split(" ");
        var month = this.getMonthFromString(arr[1]);
        var fullDate = arr[3] + "-" + month + "-" + arr[2];
        this.next_oil_change = fullDate;
        // console.log(fullDate)
        // console.log("Date New value: " + args.value);
        // console.log("Date value: " + args.oldValue);
    };
    AddplacaComponent.prototype.getMonthFromString = function (mon) {
        return new Date(Date.parse(mon + " 1, 2019")).getMonth() + 1;
    };
    AddplacaComponent.prototype.onItemSelected = function (args) {
        console.log(args.value);
    };
    AddplacaComponent.prototype.mask = function (args) {
        console.log('Valor: ', args.value);
        console.log('Placa: ', this.badge);
        console.log('Longitud: ', args.value.length);
        if (args.value.length === 6 && !args.value.includes('-') && !args.value.includes(' ')) {
            var a = args.value.substring(0, 3);
            var b = args.value.substring(3, 6);
            console.log(a + b);
            var res = a + '-' + b;
            this.badge = res;
            console.log(this.badge);
        }
    };
    AddplacaComponent.prototype.onDrawerButtonTap = function () {
        this.router.navigate(['badges'], {
            animated: true,
            transition: {
                name: "slideBottom",
                duration: 380,
                curve: "easeIn"
            }
        });
    };
    AddplacaComponent.prototype.submit = function () {
        var _this = this;
        this.processing = true;
        console.log('Datos almacenados: ');
        console.log('Placa: ', this.badge);
        console.log('Ciudad: ', this.city);
        console.log('Soat:', this.soat_exp_date);
        console.log('Tecomecanica: ', this.tecmec_exp_date);
        console.log('Licencia: ', this.license_exp_date);
        console.log('Cambio de Aceite: ', this.next_oil_change);
        if (this.badge.length > 4) {
            this.database.getdbConnection()
                .then(function (db) {
                db.execSQL("INSERT INTO badges (badge, city, soat_exp_date, tecmec_exp_date, license_exp_date, next_oil_change) VALUES (?, ?, ?, ?, ?, ?)", [_this.badge, _this.city, _this.soat_exp_date, _this.tecmec_exp_date, _this.license_exp_date, _this.next_oil_change]).then(function (id) {
                    console.log("INSERT RESULT", id);
                    // this.fetch();
                    nativescript_fancyalert_1.TNSFancyAlert.showSuccess("¡Excelente!", "Sus datos fueron guardados");
                    _this.processing = false;
                    _this.router.navigate(['badges'], {
                        animated: true,
                        transition: {
                            name: "slideBottom",
                            duration: 380,
                            curve: "easeIn"
                        }
                    });
                    backend_service_1.BackendService.upload = true;
                }, function (err) {
                    _this.processing = false;
                    console.log("INSERT ERROR", err);
                    nativescript_fancyalert_1.TNSFancyAlert.showError("¡Ha ocurrido un problema!", "No se ha podido guardar");
                });
            });
        }
        else {
            nativescript_fancyalert_1.TNSFancyAlert.showWarning("¡Atención!", "La placa no es válida");
            this.processing = false;
        }
    };
    AddplacaComponent = __decorate([
        core_1.Component({
            selector: 'addplaca',
            templateUrl: './addplaca.component.html',
            styleUrls: ['./addplaca.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, sqlite_service_1.SqliteService])
    ], AddplacaComponent);
    return AddplacaComponent;
}());
exports.AddplacaComponent = AddplacaComponent;
