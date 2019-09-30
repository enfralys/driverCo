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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUFBO0lBYUUsQ0FBQztJQVZELHVCQUFRLEdBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRTtZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3JCLE9BQU8sS0FBSyxDQUFDO1NBRWQ7YUFBSTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDdEIsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7SUFDRCxXQUFDO0FBQUQsQ0FBQyxBQWJILElBYUc7QUFiVSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBVc2VyIHtcclxuICAgIG51bWJlcjogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gIHZhbGlkYXRlKCl7XHJcbiAgICBpZiAodGhpcy5udW1iZXIubGVuZ3RoIDwgMTApIHtcclxuICAgICAgY29uc29sZS5sb2coXCJhc2Rhc2FcIilcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBcclxuICAgIH1lbHNle1xyXG4gICAgICBjb25zb2xlLmxvZyhcImFzZGFzYTJcIilcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIH0iXX0=