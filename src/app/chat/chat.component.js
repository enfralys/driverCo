"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { ListView } from "ui/list-view";
// import { TextField } from "ui/text-field";
var SocketIO = require("nativescript-socket.io");
var page_1 = require("tns-core-modules/ui/page/page");
var ChatComponent = /** @class */ (function () {
    function ChatComponent(ngZone, page) {
        this.ngZone = ngZone;
        this.page = page;
        this.options = {
            query: {
                token: 'SOME_TOKEN_HERE',
            },
            android: {
            // http://socketio.github.io/socket.io-client-java/apidocs/io/socket/client/IO.Options.html
            },
            ios: {
            // https://nuclearace.github.io/Socket.IO-Client-Swift/Enums/SocketIOClientOption.html
            }
        };
        this.so = SocketIO.connect('http://138.68.31.167:4999', this.options);
        this.countries = [0];
        this.page.actionBarHidden = false;
        console.log(this.so);
        SocketIO.enableDebug();
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.so.on("messages", function (data) {
            console.log("conecto");
            _this.ngZone.run(function () {
                _this.countries.push(data);
            });
        });
        this.chats$ = this.countries;
    };
    ChatComponent = __decorate([
        core_1.Component({
            selector: 'ns-chat',
            templateUrl: './chat.component.html',
            styleUrls: ['./chat.component.scss']
        }),
        __metadata("design:paramtypes", [core_1.NgZone, page_1.Page])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
