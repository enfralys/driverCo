"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var ModalComponent = /** @class */ (function () {
    function ModalComponent(params) {
        this.params = params;
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.close = function () {
        this.params.closeCallback();
    };
    ModalComponent = __decorate([
        core_1.Component({
            selector: 'modal',
            templateUrl: './modal.component.html',
            styleUrls: ['./modal.component.css']
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
