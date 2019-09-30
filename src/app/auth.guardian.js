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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZGlhbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGguZ3VhcmRpYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsMENBQXNEO0FBRXRELDREQUEwRDtBQUcxRDtJQUNFLG1CQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7SUFBQyxDQUFDO0lBRTlELCtCQUFXLEdBQVg7UUFDRSxJQUFJLGdDQUFjLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNuQixPQUFPLElBQUksQ0FBQztTQUViO2FBQ0k7WUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUV0QixPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQWZVLFNBQVM7UUFEckIsaUJBQVUsRUFBRTt5Q0FFaUIsZUFBTTtPQUR2QixTQUFTLENBZ0JyQjtJQUFELGdCQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBDYW5BY3RpdmF0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL2JhY2tlbmQuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgIGNvbnNvbGUubG9nKFwiYXF1aSAyXCIpIH1cclxuXHJcbiAgY2FuQWN0aXZhdGUoKSB7XHJcbiAgICBpZiAoQmFja2VuZFNlcnZpY2UuaXNMb2dnZWRJbigpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYXF1aVwiKVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICBcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImFxdWkgbm9cIilcclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19