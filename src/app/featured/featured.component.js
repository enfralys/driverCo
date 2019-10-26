"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fs = require("tns-core-modules/file-system");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_cardview_1 = require("@nstudio/nativescript-cardview");
var userapi_service_1 = require("../services/userapi.service");
var common_1 = require("@angular/common");
var router_module_1 = require("nativescript-angular/router/router.module");
var imagepicker = require("nativescript-imagepicker");
var page_1 = require("tns-core-modules/ui/page/page");
var bgHttp = require("nativescript-background-http");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var modal_component_1 = require("./modal/modal.component");
var sqlite_service_1 = require("../shared/services/sqlite.service");
element_registry_1.registerElement("CardView", function () { return nativescript_cardview_1.CardView; });
var FeaturedComponent = /** @class */ (function () {
    function FeaturedComponent(userapi, datePipe, router, modalService, viewContainerRef, sqlite) {
        this.userapi = userapi;
        this.datePipe = datePipe;
        this.router = router;
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
        this.sqlite = sqlite;
        this.imageAssets = [];
        this.datePanel = false;
        this.server = "http://138.68.31.167:5000";
        this.currentFileNameBeingUploaded = "";
        this.isSingleMode = true;
        this.thumbSize = 80;
        this.previewSize = 300;
        // Use the component constructor to inject providers.
        this.session = bgHttp.session("image-upload");
    }
    FeaturedComponent.prototype.getdetail = function () {
        this.badge = this.userapi.getobDetail();
        console.log(this.badge.tecmec_exp_date);
        if (this.badge.soat_exp_date) {
            this.soat_exp_date = this.datePipe.transform(this.badge.soat_exp_date, 'dd/MM/yyyy');
        }
        else {
            this.soat_exp_date = "SIN INFORMACIÓN";
        }
        if (this.badge.tecmec_exp_date) {
            this.tecmec_exp_date = this.datePipe.transform(this.badge.tecmec_exp_date, 'dd/MM/yyyy');
        }
        else {
            this.tecmec_exp_date = "SIN INFORMACIÓN";
        }
        if (this.badge.license_exp_date) {
            this.license_exp_date = this.datePipe.transform(this.badge.license_exp_date, 'dd/MM/yyyy');
        }
        else {
            this.license_exp_date = "SIN INFORMACIÓN";
        }
        if (this.badge.next_oil_change) {
            this.next_oil_change = this.datePipe.transform(this.badge.next_oil_change, 'dd/MM/yyyy');
        }
        else {
            this.next_oil_change = "SIN INFORMACIÓN";
        }
        console.log(this.badge);
    };
    FeaturedComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        this.getdetail();
    };
    FeaturedComponent.prototype.detect = function (obj) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (obj) {
                    case 'soat':
                        if (this.badge.soat_exp_date == null) {
                            this.type = 'soat';
                            return [2 /*return*/, this.datePanel = true];
                        }
                        else if (!this.badge.soat_img) {
                            return [2 /*return*/, this.badge.soat_img = this.setImage()];
                        }
                        else {
                            console.log("Está aquí");
                        }
                        break;
                    case 'tecno':
                        if (this.badge.tecmec_exp_date == null) {
                            this.type = 'tecno';
                            return [2 /*return*/, this.datePanel = true];
                        }
                        if (!this.badge.tecmec_img) {
                            return [2 /*return*/, this.badge.tecmec_img = this.setImage()];
                        }
                        break;
                    case 'lice':
                        if (this.badge.license_exp_date == null) {
                            this.type = 'lice';
                            return [2 /*return*/, this.datePanel = true];
                        }
                        if (!this.badge.license_img) {
                            return [2 /*return*/, this.badge.license_img = this.setImage()];
                        }
                        break;
                    case 'oil':
                        if (this.badge.next_oil_change == null) {
                            this.type = 'oil';
                            this.datePanel = true;
                        }
                    default:
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    FeaturedComponent.prototype.setImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var context;
            return __generator(this, function (_a) {
                // this.badge.badge = "relasd"
                // this.sqlite.update(this.badge)
                // console.log("aca paso");
                // return "loca";
                this.isSingleMode = true;
                context = imagepicker.create({
                    mode: "single"
                });
                this.startSelection(context);
                return [2 /*return*/];
            });
        });
    };
    FeaturedComponent.prototype.getMonthFromString = function (mon) {
        return new Date(Date.parse(mon + " 1, 2019")).getMonth() + 1;
    };
    FeaturedComponent.prototype.setDate = function (args) {
        var date = args.value.toString();
        var arr = new Array();
        arr = date.split(" ");
        var month = this.getMonthFromString(arr[1]);
        var fullDate = arr[3] + "-" + month + "-" + arr[2];
        console.log(fullDate);
        switch (this.type) {
            case 'soat':
                console.log('aqui paso');
                this.badge.soat_exp_date = fullDate;
                this.reload();
                this.datePanel = false;
                break;
            case 'tecno':
                this.badge.tecmec_exp_date = fullDate;
                this.reload();
                this.datePanel = false;
                break;
            case 'lice':
                this.badge.license_exp_date = fullDate;
                this.reload();
                this.datePanel = false;
                break;
            default:
                break;
        }
        this.sqlite.update(this.badge);
        console.log(this.badge);
        return fullDate;
    };
    FeaturedComponent.prototype.onSelectSingleTap = function () {
        var options = {
            viewContainerRef: this.viewContainerRef,
            fullscreen: true,
            context: {}
        };
        this.modalService.showModal(modal_component_1.ModalComponent, options);
        // this.isSingleMode = true;
        // let context = imagepicker.create({
        //     mode: "single"
        // });
        // this.startSelection(context);
    };
    FeaturedComponent.prototype.startSelection = function (context) {
        var _this = this;
        context
            .authorize()
            .then(function () {
            return context.present();
        })
            .then(function (selection) {
            // this.resetEventLog();
            console.log("Selection done: " + JSON.stringify(selection));
            var imageAsset = selection.length > 0 ? selection[0] : null;
            if (imageAsset) {
                _this.getImageFilePath(imageAsset).then(function (path) {
                    console.log("path: " + path);
                    _this.uploadImage(path);
                });
            }
        }).catch(function (e) {
            console.log(e);
        });
    };
    FeaturedComponent.prototype.createNewRequest = function () {
        var request = {
            url: this.server + '/test',
            method: "POST",
            headers: {
                "Content-Type": " multipart/form-data"
            },
            description: "uploading file...",
            androidAutoDeleteAfterUpload: false,
            androidNotificationTitle: "NativeScript HTTP background"
        };
        return request;
    };
    FeaturedComponent.prototype.uploadImage = function (path) {
        var file = fs.File.fromPath(path);
        this.currentFileNameBeingUploaded = file.path.substr(file.path.lastIndexOf("/") + 1);
        var request = this.createNewRequest();
        request.description = "uploading image " + file.path;
        request.headers["File-Name"] = this.currentFileNameBeingUploaded;
        // -----> multipart upload
        // const params = [
        //     {
        //         name: "test",
        //         value: "value"
        //     },
        //     {
        //         name: "fileToUpload",
        //         filename: file.path,
        //         mimeType: 'image/jpeg'
        //     }
        // ];
        // let task = this.session.multipartUpload(params, request);
        // <----- multipart upload
        console.log(this.session);
        console.log(file, "file");
        var params = [{ "name": file.name, "filename": file.path, "mimeType": "image/jpg" }];
        var task = this.session.multipartUpload(params, request);
    };
    FeaturedComponent.prototype.onDrawerButtonTap = function () {
        if (this.datePanel === true) {
            this.datePanel = false;
        }
        else {
            this.router.navigate(['badges'], {
                animated: true,
                transition: {
                    name: "slideRight",
                    duration: 380,
                    curve: "easeIn"
                }
            });
        }
    };
    FeaturedComponent.prototype.reload = function () {
        if (this.badge.soat_exp_date) {
            this.soat_exp_date = this.datePipe.transform(this.badge.soat_exp_date, 'dd/MM/yyyy');
        }
        else {
            this.soat_exp_date = "SIN INFORMACIÓN";
        }
        if (this.badge.tecmec_exp_date) {
            this.tecmec_exp_date = this.datePipe.transform(this.badge.tecmec_exp_date, 'dd/MM/yyyy');
        }
        else {
            this.tecmec_exp_date = "SIN INFORMACIÓN";
        }
        if (this.badge.license_exp_date) {
            this.license_exp_date = this.datePipe.transform(this.badge.license_exp_date, 'dd/MM/yyyy');
        }
        else {
            this.license_exp_date = "SIN INFORMACIÓN";
        }
        if (this.badge.next_oil_change) {
            this.next_oil_change = this.datePipe.transform(this.badge.next_oil_change, 'dd/MM/yyyy');
        }
        else {
            this.next_oil_change = "SIN INFORMACIÓN";
        }
    };
    FeaturedComponent.prototype.getImageFilePath = function (imageAsset) {
        return new Promise(function (resolve) {
            if (page_1.isIOS) { // create file from image asset and return its path
                var tempFolderPath = fs.knownFolders.temp().getFolder("nsimagepicker").path;
                var tempFilePath = fs.path.join(tempFolderPath, Date.now() + ".jpg");
                // ----> ImageSource.saveToFile() implementation
                // const imageSource = new ImageSource();
                // imageSource.fromAsset(imageAsset).then(source => {
                //     const saved = source.saveToFile(tempFilePath, 'png');
                //     console.log(`saved: ${saved}`);
                //     resolve(tempFilePath);
                // });
                // <---- ImageSource.saveToFile() implementation
                // ----> Native API implementation
                try {
                    //  const options = PHImageRequestOptions.new();
                    // options.synchronous = true;
                    //options.version = PHImageRequestOptionsVersion.Current;
                    // options.deliveryMode = PHImageRequestOptionsDeliveryMode.HighQualityFormat;
                    //  PHImageManager.defaultManager().requestImageDataForAssetOptionsResultHandler(imageAsset.ios, options, (nsData: NSData) => {
                    //  nsData.writeToFileAtomically(tempFilePath, true);
                    // resolve(tempFilePath);
                    // });
                }
                catch (error) {
                }
                // <---- Native API implementation
            }
            else { // return imageAsset.android, since it's the path of the file
                resolve(imageAsset.android);
            }
        });
    };
    FeaturedComponent = __decorate([
        core_1.Component({
            selector: "Featured",
            moduleId: module.id,
            providers: [modal_dialog_1.ModalDialogService],
            templateUrl: "./featured.component.html",
            styleUrls: ['./featured.component.css']
        }),
        __metadata("design:paramtypes", [userapi_service_1.UserapiService, common_1.DatePipe,
            router_module_1.RouterExtensions,
            modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef,
            sqlite_service_1.SqliteService])
    ], FeaturedComponent);
    return FeaturedComponent;
}());
exports.FeaturedComponent = FeaturedComponent;
