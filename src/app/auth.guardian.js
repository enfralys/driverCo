"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var backend_service_1 = require("./shared/backend.service");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
        console.log("aqui 2");
    }
    AuthGuard.prototype.canActivate = function () {
        if (backend_service_1.BackendService.isLoggedIn()) {
            console.log("aqui");
            return true;
        }
        else {
            this.router.navigate(["/login"]);
            console.log("aqui no");
            return false;
        }
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
