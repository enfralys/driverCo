"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var floatBtnComponent = /** @class */ (function () {
    function floatBtnComponent() {
    }
    floatBtnComponent = __decorate([
        core_1.Component({
            selector: "float-btn",
            template: "\n\n    <StackLayout class=\"float-btn\">\n        <Label text=\"+\" class=\"float-btn-text\"></Label>\n    </StackLayout>\n    ",
            styles: ["\n        .float-btn{\n            background-color: #535353;\n            width:56;\n            border-radius:28;\n            height: 56;\n            text-align:center;\n            vertical-align: middle;\n        }\n\n        .float-btn-text {\n            color: white;\n            font-size:36;\n        }\n    "]
        })
    ], floatBtnComponent);
    return floatBtnComponent;
}());
exports.floatBtnComponent = floatBtnComponent;
