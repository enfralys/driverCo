"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var backend_service_1 = require("../shared/backend.service");
var UserapiService = /** @class */ (function () {
    function UserapiService(http) {
        this.http = http;
        this.server = "http://138.68.31.167:5000";
    }
    UserapiService.prototype.getobDetail = function () {
        var object = this.obDetail;
        return object;
    };
    UserapiService.prototype.setobDetail = function (obj) {
        this.obDetail = obj;
    };
    UserapiService.prototype.login = function (data) {
        var json = {
            cell: data.cell
        };
        var params = json;
        console.log(params);
        return this.http.post(this.server + "/login", json);
    };
    UserapiService.prototype.checkCode = function (data) {
        var json = {
            cell: data.cell,
            token: data.token
        };
        var params = json;
        console.log(params);
        return this.http.post(this.server + "/registeruser", json);
    };
    UserapiService.prototype.upload = function (data) {
        var json = {
            badge: data.badge,
            cell: backend_service_1.BackendService.phoneNumber
        };
        var params = json;
        console.log(params);
        return this.http.post(this.server + "/savebadge", json);
    };
    UserapiService.prototype.download = function (data) {
        var params = new http_1.HttpParams();
        params = params.append('cell', data.cell);
        console.log(params);
        return this.http.get(this.server + "/getbadges", { params: params });
    };
    UserapiService.prototype.getNews = function () {
        return this.http.get(this.server + "/news");
    };
    UserapiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserapiService);
    return UserapiService;
}());
exports.UserapiService = UserapiService;
