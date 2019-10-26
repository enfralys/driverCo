"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.validate = function () {
        if (this.number.length < 10) {
            console.log("asdasa");
            return false;
        }
        else {
            console.log("asdasa2");
            return true;
        }
    };
    return User;
}());
exports.User = User;
