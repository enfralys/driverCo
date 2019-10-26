import { filter } from "rxjs/operators";
import { Component, OnInit, NgZone, OnDestroy } from "@angular/core";
import * as app from "tns-core-modules/application";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { SqliteService } from "./shared/services/sqlite.service";
import { BackendService } from "./shared/backend.service";
import * as Connectivity from "tns-core-modules/connectivity";
import { UserapiService } from "./services/userapi.service";
import { TNSFancyAlert } from "nativescript-fancyalert";
import * as firebase from 'nativescript-plugin-firebase';
import { SocketIO } from "nativescript-socketio";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})

export class AppComponent implements OnInit, OnDestroy {
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;
    public connectionType: string;
    imageAssets = [];
    imageSrc: any;
    isSingleMode: boolean = true;
    thumbSize: number = 80;
    previewSize: number = 300;
    db: any;
    badges: Array<any>;

    constructor(private socketIO: SocketIO, private router: Router, private routerExtensions: RouterExtensions, private database: SqliteService, private zone: NgZone, private userService: UserapiService) {
        // Use the component constructor to inject services.

        this.database.getdbConnection()
            .then(db => {
                db.execSQL("CREATE TABLE IF NOT EXISTS badges ( id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT , badge TEXT NOT NULL , city TEXT NOT NULL, soat_exp_date NUMERIC, tecmec_exp_date NUMERIC, license_exp_date NUMERIC, next_oil_change NUMERIC, soat_img TEXT, tecmec_img TEXT, license_img TEXT)").then(() => {
                }, error => {
                    console.log("CREATE TABLE ERROR", error);
                });
            }, error => {
                console.log("OPEN DB ERROR", error);
            });

        setInterval(() => {
            this.checkInternet()
            if (BackendService.upload === true) {
                this.loadBadges()
            }
            console.log("Funcionando...")
        }, 30000);
        BackendService.upload = false;
    }

    ngOnInit(): void {
        console.log('test');
        console.log(this.socketIO.connect());


        this._activatedUrl = "/home";
        this._sideDrawerTransition = new SlideInOnTopTransition();

        this.router.events
            .pipe(filter((event: any) => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);

        setInterval(() => {
            this.loadBadges()
        }, 10000);

    }

    ngOnDestroy() {
        this.socketIO.disconnect();
    }

    logOut() {
        console.log(BackendService.token);
        BackendService.token = "";
        console.log(BackendService.token, "mamadas");
        this.routerExtensions.navigate(['/login'], {
            transition: {
                name: "fade"
            }
        });
    }

    async loadBadges() {
        this.badges = [];
        this.database.getdbConnection()
            .then(db => {
                db.all("SELECT * FROM badges").then(rows => {
                    if (rows.length > 0) {
                        for (var row in rows) {
                            this.badges.push({
                                "badge": rows[row][1],
                                "city": rows[row][2],
                                "soat_exp_date": rows[row][3],
                                "tecmec_exp_date": rows[row][4],
                                "license_exp_date": rows[row][5],
                                "next_oil_change": rows[row][6],
                                "soat_img": rows[row][7],
                                "tecmec_img": rows[row][8],
                                "license_img": rows[row][9],
                                "cell": BackendService.phoneNumber
                            });
                        }
                        this.db = db;
                    }
                }, error => {
                    console.log("SELECT ERROR", error);
                });
            });
    }

    connectionToString(connectionType: number): string {
        switch (connectionType) {
            case Connectivity.connectionType.none:
                return "0";
            case Connectivity.connectionType.wifi:
                return "1";
            case Connectivity.connectionType.mobile:
                return "2";
            default:
                return "3";
        }
    }

    checkInternet() {
        this.connectionType = this.connectionToString(Connectivity.getConnectionType());
        Connectivity.startMonitoring(connectionType => {
            this.zone.run(() => {
                this.connectionType = this.connectionToString(connectionType);
            });
        });

        console.log("Estado de subida: ", BackendService.upload)
        console.log("Estado de conexión: ", this.connectionType)

        if (this.connectionType !== '0' && BackendService.upload === true) {
            console.log("Hay conexión, se sube")

            let data = {
                badge: this.badges
            }

            console.log(data)


            this.userService.upload(data).subscribe(
                res => {
                    if (res) {
                        console.log(JSON.stringify(res));
                        BackendService.upload = false;
                    }
                },
                err => {
                    console.log(err)
                    BackendService.upload = false;
                })
            console.log("Estado posterior a la subida: ", BackendService.upload)
        }
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }
}
