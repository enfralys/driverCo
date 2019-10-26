"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var backend_service_1 = require("../backend.service");
//SQLite library
var Sqlite = require("nativescript-sqlite");
var SqliteService = /** @class */ (function () {
    function SqliteService() {
    }
    SqliteService.prototype.getdbConnection = function () {
        return new Sqlite('my.db');
    };
    SqliteService.prototype.closedbConnection = function () {
        new Sqlite('my.db')
            .then(function (db) {
            db.close();
        });
    };
    SqliteService.prototype.update = function (obj) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getdbConnection()];
                    case 1:
                        _a.db = _b.sent();
                        console.log(this.db);
                        console.log(obj, "este es el objeto");
                        this.db.execSQL("update badges set city = ?, soat_exp_date = ?, tecmec_exp_date = ?, license_exp_date = ?, next_oil_change = ? where badge = ?", [obj.city, obj.soat_exp_date, obj.tecmec_exp_date, obj.license_exp_date, obj.next_oil_change, obj.badge]).then(function (id) {
                            console.log(id);
                            backend_service_1.BackendService.upload = true;
                        }, function (error) {
                            console.log(error);
                            alert('An error occurred while adding an item to your list.');
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SqliteService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SqliteService);
    return SqliteService;
}());
exports.SqliteService = SqliteService;
