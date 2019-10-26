import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import * as fs from "tns-core-modules/file-system";
import { registerElement } from "nativescript-angular/element-registry";
import { CardView } from "@nstudio/nativescript-cardview";
import { UserapiService } from "../services/userapi.service";
import { DatePipe } from '@angular/common';
import { RouterExtensions } from "nativescript-angular/router/router.module";
import * as imagepicker from "nativescript-imagepicker";
import { isIOS } from "tns-core-modules/ui/page/page";
import * as bgHttp from "nativescript-background-http";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";

import { ModalComponent } from "./modal/modal.component";
import { SqliteService } from "../shared/services/sqlite.service";

registerElement("CardView", () => CardView);

@Component({
    selector: "Featured",
    moduleId: module.id,
    providers: [ModalDialogService],
    templateUrl: "./featured.component.html",
    styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
    imageAssets = [];
    imageSrc: any;
    datePanel = false;
    server = "http://138.68.31.167:5000";
    public currentFileNameBeingUploaded = "";
    private session: any;
    isSingleMode: boolean = true;
    thumbSize: number = 80;
    previewSize: number = 300;
    db: any;
    badges: Array<any>;
    badge;
    soat_exp_date;
    tecmec_exp_date;
    license_exp_date;
    next_oil_change;
 
type;
   constructor(private userapi: UserapiService, private datePipe: DatePipe,
        private router: RouterExtensions,
        private modalService: ModalDialogService,
        private viewContainerRef: ViewContainerRef,
        private sqlite:SqliteService) {

        // Use the component constructor to inject providers.
        this.session = bgHttp.session("image-upload");

    }

    getdetail() {
        this.badge = this.userapi.getobDetail();
        console.log(this.badge.tecmec_exp_date)

        if (this.badge.soat_exp_date) {
            this.soat_exp_date = this.datePipe.transform(this.badge.soat_exp_date, 'dd/MM/yyyy');
        } else {
            this.soat_exp_date = "SIN INFORMACIÓN";
        }

        if (this.badge.tecmec_exp_date) {
            this.tecmec_exp_date = this.datePipe.transform(this.badge.tecmec_exp_date, 'dd/MM/yyyy');
        } else {
            this.tecmec_exp_date = "SIN INFORMACIÓN";
        }

        if (this.badge.license_exp_date) {
            this.license_exp_date = this.datePipe.transform(this.badge.license_exp_date, 'dd/MM/yyyy');
        } else {
            this.license_exp_date = "SIN INFORMACIÓN";
        }

        if (this.badge.next_oil_change) {
            this.next_oil_change = this.datePipe.transform(this.badge.next_oil_change, 'dd/MM/yyyy');
        } else {
            this.next_oil_change = "SIN INFORMACIÓN";
        }
        console.log(this.badge);
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.getdetail();
    }

   async detect(obj){
        
       switch (obj) {
           case 'soat':
               if (this.badge.soat_exp_date == null) {
                   this.type = 'soat';
               return    this.datePanel = true;
               }
               if (!this.badge.soat_img) {
                   //
               return this.badge.soat_img=this.setImage();
              
               }
               break;
       
               case 'tecno':
                    if (this.badge.tecmec_exp_date == null) {
                        this.type = 'tecno';
                        return  this.datePanel = true;
                    }
                    if (!this.badge.tecmec_img) {
                     return this.setImage();
                    }
               break;

               case 'lice':
                    if (this.badge.license_exp_date == null) {
                        this.type = 'tecno';
                      return  this.datePanel = true;
                    }
                    if (!this.badge.license_img) {
                     return this.setImage();
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
    }


    async setImage(){
        this.badge.badge = "relasd"
       this.sqlite.update(this.badge)
        
        console.log("aca paso");
        return "loca";
    }
    getMonthFromString(mon) {
        return new Date(Date.parse(mon + " 1, 2019")).getMonth() + 1
    }
    
    setDate(args){
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
        console.log(this.badge);
        return fullDate;
    }

    onSelectSingleTap() {
        const options: ModalDialogOptions = {
            viewContainerRef: this.viewContainerRef,
            fullscreen: true,
            context: {}
        };
        this.modalService.showModal(ModalComponent, options);
        // this.isSingleMode = true;

        // let context = imagepicker.create({
        //     mode: "single"
        // });
        // this.startSelection(context);
    }

    private startSelection(context) {
        context
            .authorize()
            .then(() => {
                return context.present();
            })
            .then((selection) => {

                // this.resetEventLog();

                console.log("Selection done: " + JSON.stringify(selection));
                let imageAsset = selection.length > 0 ? selection[0] : null;

                if (imageAsset) {
                    this.getImageFilePath(imageAsset).then((path) => {
                        console.log(`path: ${path}`);
                        this.uploadImage(path);
                    });
                }
            }).catch(function (e) {
                console.log(e);
            });
    }
    private createNewRequest() {
        const request = {
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
    }
    private uploadImage(path: string) {
        let file = fs.File.fromPath(path);
        this.currentFileNameBeingUploaded = file.path.substr(file.path.lastIndexOf("/") + 1);

        const request = this.createNewRequest();
        request.description = `uploading image ${file.path}`;
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
        let params = [{ "name": file.name, "filename": file.path, "mimeType": "image/jpg" }];

        let task = this.session.multipartUpload(params, request);

    }
    onDrawerButtonTap(): void {
        this.router.navigate(['badges'],
            {
                animated: true,
                transition: {
                    name: "slideRight",
                    duration: 380,
                    curve: "easeIn"
                }
            });
    }

        reload(){
            
        if (this.badge.soat_exp_date) {
            this.soat_exp_date = this.datePipe.transform(this.badge.soat_exp_date, 'dd/MM/yyyy');
        } else {
            this.soat_exp_date = "SIN INFORMACIÓN";
        }

        if (this.badge.tecmec_exp_date) {
            this.tecmec_exp_date = this.datePipe.transform(this.badge.tecmec_exp_date, 'dd/MM/yyyy');
        } else {
            this.tecmec_exp_date = "SIN INFORMACIÓN";
        }

        if (this.badge.license_exp_date) {
            this.license_exp_date = this.datePipe.transform(this.badge.license_exp_date, 'dd/MM/yyyy');
        } else {
            this.license_exp_date = "SIN INFORMACIÓN";
        }

        if (this.badge.next_oil_change) {
            this.next_oil_change = this.datePipe.transform(this.badge.next_oil_change, 'dd/MM/yyyy');
        } else {
            this.next_oil_change = "SIN INFORMACIÓN";
        }
        }
    private getImageFilePath(imageAsset): Promise<string> {
        return new Promise((resolve) => {
            if (isIOS) { // create file from image asset and return its path

                const tempFolderPath = fs.knownFolders.temp().getFolder("nsimagepicker").path;
                const tempFilePath = fs.path.join(tempFolderPath, `${Date.now()}.jpg`);

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
                } catch (error) {

                }
                // <---- Native API implementation
            } else { // return imageAsset.android, since it's the path of the file
                resolve(imageAsset.android);
            }
        });
    }


}
