"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application_settings_1 = require("tns-core-modules/application-settings");
var BackendService = /** @class */ (function () {
    function BackendService() {
    }
    BackendService.isLoggedIn = function () {
        return !!application_settings_1.getString("token");
    };
    Object.defineProperty(BackendService, "token", {
        get: function () {
            return application_settings_1.getString("token");
        },
        set: function (theToken) {
            application_settings_1.setString("token", theToken);
        },
        enumerable: true,
        configurable: true
    });
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsOEVBQTZFO0FBRTdFO0lBQUE7SUFjQSxDQUFDO0lBWlUseUJBQVUsR0FBakI7UUFDSSxPQUFPLENBQUMsQ0FBQyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxzQkFBVyx1QkFBSzthQUFoQjtZQUNJLE9BQU8sZ0NBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixDQUFDO2FBR0QsVUFBaUIsUUFBZ0I7WUFDN0IsZ0NBQVMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakMsQ0FBQzs7O09BTEE7SUFNTCxxQkFBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgZ2V0U3RyaW5nLCBzZXRTdHJpbmcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhY2tlbmRTZXJ2aWNlIHtcclxuXHJcbiAgICBzdGF0aWMgaXNMb2dnZWRJbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gISFnZXRTdHJpbmcoXCJ0b2tlblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IHRva2VuKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcInRva2VuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgc3RhdGljIHNldCB0b2tlbih0aGVUb2tlbjogc3RyaW5nKSB7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwidG9rZW5cIiwgdGhlVG9rZW4pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==