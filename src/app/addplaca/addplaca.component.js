"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var AddplacaComponent = /** @class */ (function () {
    function AddplacaComponent(router) {
        this.router = router;
        this.minDate = new Date(1975, 0, 29);
        this.maxDate = new Date(2045, 4, 12);
    }
    AddplacaComponent.prototype.ngOnInit = function () {
    };
    AddplacaComponent.prototype.onDatePickerLoaded = function (args) {
        // const datePicker = args.object as DatePicker;
    };
    AddplacaComponent.prototype.onDateChanged = function (args) {
        console.log("Date New value: " + args.value);
        console.log("Date value: " + args.oldValue);
    };
    AddplacaComponent.prototype.onDayChanged = function (args) {
        console.log("Day New value: " + args.value);
        console.log("Day Old value: " + args.oldValue);
    };
    AddplacaComponent.prototype.onMonthChanged = function (args) {
        console.log("Month New value: " + args.value);
        console.log("Month Old value: " + args.oldValue);
    };
    AddplacaComponent.prototype.onYearChanged = function (args) {
        console.log("Year New value: " + args.value);
        console.log("Year Old value: " + args.oldValue);
    };
    AddplacaComponent.prototype.submit = function () {
        this.router.navigateByUrl('/home');
    };
    AddplacaComponent = __decorate([
        core_1.Component({
            selector: 'ns-addplaca',
            templateUrl: './addplaca.component.html',
            styleUrls: ['./addplaca.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], AddplacaComponent);
    return AddplacaComponent;
}());
exports.AddplacaComponent = AddplacaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcGxhY2EuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkcGxhY2EuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQVF6QztJQUdFLDJCQUFvQixNQUFhO1FBQWIsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUZqQyxZQUFPLEdBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0QyxZQUFPLEdBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNELENBQUM7SUFFdEMsb0NBQVEsR0FBUjtJQUNBLENBQUM7SUFDRCw4Q0FBa0IsR0FBbEIsVUFBbUIsSUFBSTtRQUNyQixnREFBZ0Q7SUFDcEQsQ0FBQztJQUVELHlDQUFhLEdBQWIsVUFBYyxJQUFJO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCx3Q0FBWSxHQUFaLFVBQWEsSUFBSTtRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCwwQ0FBYyxHQUFkLFVBQWUsSUFBSTtRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCx5Q0FBYSxHQUFiLFVBQWMsSUFBSTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxrQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDcEMsQ0FBQztJQWpDWSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7WUFDdkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBSTJCLGVBQU07T0FIdEIsaUJBQWlCLENBa0M3QjtJQUFELHdCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7QUFsQ1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWFkZHBsYWNhJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZHBsYWNhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRkcGxhY2EuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRwbGFjYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG1pbkRhdGU6IERhdGUgPSBuZXcgRGF0ZSgxOTc1LCAwLCAyOSk7XG4gIG1heERhdGU6IERhdGUgPSBuZXcgRGF0ZSgyMDQ1LCA0LCAxMik7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOlJvdXRlcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgb25EYXRlUGlja2VyTG9hZGVkKGFyZ3MpIHtcbiAgICAvLyBjb25zdCBkYXRlUGlja2VyID0gYXJncy5vYmplY3QgYXMgRGF0ZVBpY2tlcjtcbn1cblxub25EYXRlQ2hhbmdlZChhcmdzKSB7XG4gICAgY29uc29sZS5sb2coXCJEYXRlIE5ldyB2YWx1ZTogXCIgKyBhcmdzLnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhcIkRhdGUgdmFsdWU6IFwiICsgYXJncy5vbGRWYWx1ZSk7XG59XG5cbm9uRGF5Q2hhbmdlZChhcmdzKSB7XG4gICAgY29uc29sZS5sb2coXCJEYXkgTmV3IHZhbHVlOiBcIiArIGFyZ3MudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKFwiRGF5IE9sZCB2YWx1ZTogXCIgKyBhcmdzLm9sZFZhbHVlKTtcbn1cblxub25Nb250aENoYW5nZWQoYXJncykge1xuICAgIGNvbnNvbGUubG9nKFwiTW9udGggTmV3IHZhbHVlOiBcIiArIGFyZ3MudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKFwiTW9udGggT2xkIHZhbHVlOiBcIiArIGFyZ3Mub2xkVmFsdWUpO1xufVxuXG5vblllYXJDaGFuZ2VkKGFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyhcIlllYXIgTmV3IHZhbHVlOiBcIiArIGFyZ3MudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKFwiWWVhciBPbGQgdmFsdWU6IFwiICsgYXJncy5vbGRWYWx1ZSk7XG59XG5cbnN1Ym1pdCgpe1xuICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvaG9tZScpXG59XG59XG4iXX0=