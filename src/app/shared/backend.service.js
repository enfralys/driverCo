"use strict";
exports.__esModule = true;
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
    Object.defineProperty(BackendService, "phoneNumber", {
        get: function () {
            return application_settings_1.getString("phoneNumber");
        },
        set: function (thePhoneNumber) {
            application_settings_1.setString("phoneNumber", thePhoneNumber);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackendService, "code", {
        get: function () {
            return application_settings_1.getNumber("code");
        },
        set: function (theCode) {
            application_settings_1.setNumber("code", theCode);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackendService, "upload", {
        get: function () {
            return application_settings_1.getBoolean("upload");
        },
        set: function (theUpload) {
            application_settings_1.setBoolean("upload", theUpload);
        },
        enumerable: true,
        configurable: true
    });
    return BackendService;
}());
exports.BackendService = BackendService;
