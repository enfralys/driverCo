"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_1 = require("../shared");
var page_1 = require("tns-core-modules/ui/page/page");
var router_1 = require("@angular/router");
var userapi_service_1 = require("../services/userapi.service");
var nativescript_fancyalert_1 = require("nativescript-fancyalert");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(page, router, userService) {
        this.page = page;
        this.router = router;
        this.userService = userService;
        this.isLoggingIn = true;
        this.page.actionBarHidden = true;
        this.user = new shared_1.User();
        this.user.number = "";
        this.user.name = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                if (this.token == undefined) {
                    this.token = "alsdjaldasjdkad";
                }
                if (!this.user.validate()) {
                    nativescript_fancyalert_1.TNSFancyAlert.showWarning("Cuidado!", "Por favor completa!", "Minimo 10 Digitos!");
                }
                else {
                    data = {
                        cell: this.user.number,
                        token: this.token
                    };
                    /**
                      this.userService.login(data).subscribe(res=>{
                         if(res){
                           BackendService.token = this.token;
                           this.router.navigate(['home',])
                         }else{
                           this.router.navigate(['home',])
                 
                         }
                      })
                       */
                    this.router.navigate(['home',]);
                    console.log("funciono todo y paso", this.token);
                }
                return [2 /*return*/];
            });
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'ns-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router, userapi_service_1.UserapiService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELG9DQUFpRDtBQUNqRCxzREFBcUQ7QUFDckQsMENBQXlDO0FBQ3pDLCtEQUE2RDtBQUM3RCxtRUFBNkU7QUFRN0U7SUFJRSx3QkFBb0IsSUFBUyxFQUFVLE1BQWEsRUFBVSxXQUEyQjtRQUFyRSxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUQxRixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUVoQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBQyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGFBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUNGLGlDQUFRLEdBQVI7SUFDQSxDQUFDO0lBQ0ssK0JBQU0sR0FBWjs7OztnQkFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUUsU0FBUyxFQUFFO29CQUFHLElBQUksQ0FBQyxLQUFLLEdBQUMsaUJBQWlCLENBQUE7aUJBQUM7Z0JBRzNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFHO29CQUMxQix1Q0FBYSxDQUFDLFdBQVcsQ0FDdkIsVUFBVSxFQUNWLHFCQUFxQixFQUNyQixvQkFBb0IsQ0FDckIsQ0FBQztpQkFFSDtxQkFBSTtvQkFDQyxJQUFJLEdBQUc7d0JBQ1QsSUFBSSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTt3QkFDckIsS0FBSyxFQUFDLElBQUksQ0FBQyxLQUFLO3FCQUNqQixDQUFBO29CQUNKOzs7Ozs7Ozs7O3lCQVVLO29CQUNILElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQTtvQkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRyxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUE7aUJBRWxEOzs7O0tBR0Y7SUE3Q1UsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztZQUNyQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FLeUIsV0FBSSxFQUFpQixlQUFNLEVBQXVCLGdDQUFjO09BSjlFLGNBQWMsQ0E4QzFCO0lBQUQscUJBQUM7Q0FBQSxBQTlDRCxJQThDQztBQTlDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyLCBCYWNrZW5kU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVzZXJhcGlTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXNlcmFwaS5zZXJ2aWNlJztcbmltcG9ydCB7IFROU0ZhbmN5QWxlcnQsIFROU0ZhbmN5QWxlcnRCdXR0b24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LWZhbmN5YWxlcnRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuc2NzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdHVzZXI6IFVzZXI7XG50b2tlbjtcblx0aXNMb2dnaW5nSW4gPSB0cnVlO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6UGFnZSwgcHJpdmF0ZSByb3V0ZXI6Um91dGVyLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyYXBpU2VydmljZSkge1xuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW49dHJ1ZTtcbiAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgdGhpcy51c2VyLm51bWJlcj1cIlwiO1xuICB0aGlzLnVzZXIubmFtZT1cIlwiO1xuICAgfVxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICBhc3luYyBzdWJtaXQoKXtcbiAgICBpZiAodGhpcy50b2tlbj09dW5kZWZpbmVkKSB7ICB0aGlzLnRva2VuPVwiYWxzZGphbGRhc2pka2FkXCJ9XG4gICAgICBcblxuICAgIGlmICghdGhpcy51c2VyLnZhbGlkYXRlKCkpICB7XG4gICAgICBUTlNGYW5jeUFsZXJ0LnNob3dXYXJuaW5nKFxuICAgICAgICBcIkN1aWRhZG8hXCIsXG4gICAgICAgIFwiUG9yIGZhdm9yIGNvbXBsZXRhIVwiLFxuICAgICAgICBcIk1pbmltbyAxMCBEaWdpdG9zIVwiXG4gICAgICApO1xuICAgICAgIFxuICAgIH1lbHNle1xuICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgIGNlbGw6dGhpcy51c2VyLm51bWJlcixcbiAgICAgICAgdG9rZW46dGhpcy50b2tlbiBcbiAgICAgIH1cbiAgIC8qKiBcbiAgICAgdGhpcy51c2VyU2VydmljZS5sb2dpbihkYXRhKS5zdWJzY3JpYmUocmVzPT57XG4gICAgICAgIGlmKHJlcyl7XG4gICAgICAgICAgQmFja2VuZFNlcnZpY2UudG9rZW4gPSB0aGlzLnRva2VuO1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnaG9tZScsXSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydob21lJyxdKVxuXG4gICAgICAgIH1cbiAgICAgfSlcbiAgICAgICovXG4gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnaG9tZScsXSlcbiAgICAgIGNvbnNvbGUubG9nKFwiZnVuY2lvbm8gdG9kbyB5IHBhc29cIiwgIHRoaXMudG9rZW4gKVxuICAgIFxuICAgIH1cblxuIFxuICB9XG59XG4iXX0=