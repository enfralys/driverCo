"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var UserapiService = /** @class */ (function () {
    function UserapiService(http) {
        this.http = http;
        this.server = "http://134.209.117.20:5000";
    }
    UserapiService.prototype.login = function (data) {
        var json = {
            cell: data.cell,
            token: data.token
        };
        var params = json;
        console.log(params);
        return this.http.post(this.server + "/registeruser", json);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcmFwaS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlcmFwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFrRDtBQUtsRDtJQUNJLHdCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRXBDLFdBQU0sR0FBRyw0QkFBNEIsQ0FBQTtJQUZHLENBQUM7SUFLekMsOEJBQUssR0FBTCxVQUFNLElBQUk7UUFFUixJQUFJLElBQUksR0FBRztZQUNULElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFBO1FBQ0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsTUFBTSxrQkFBZSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzVELENBQUM7SUFmUSxjQUFjO1FBSDFCLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQUU0QixpQkFBVTtPQUQzQixjQUFjLENBbUIxQjtJQUFELHFCQUFDO0NBQUEsQUFuQkQsSUFtQkM7QUFuQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyYXBpU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICAgIHNlcnZlciA9IFwiaHR0cDovLzEzNC4yMDkuMTE3LjIwOjUwMDBcIlxyXG5cclxuXHJcbiAgICBsb2dpbihkYXRhKSB7XHJcblxyXG4gICAgICBsZXQganNvbiA9IHtcclxuICAgICAgICBjZWxsOiBkYXRhLmNlbGwsXHJcbiAgICAgICAgdG9rZW46IGRhdGEudG9rZW5cclxuICAgICAgfVxyXG4gICAgICBsZXQgcGFyYW1zID0ganNvbjtcclxuICAgICAgY29uc29sZS5sb2cocGFyYW1zKVxyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy5zZXJ2ZXJ9L3JlZ2lzdGVydXNlcmAsIGpzb24pXHJcbiAgICB9XHJcbiAgXHJcbiAgICBcclxuXHJcbn1cclxuIl19