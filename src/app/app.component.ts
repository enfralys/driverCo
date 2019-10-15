import { filter } from "rxjs/operators";
import { Component, OnInit, NgZone } from "@angular/core";
import * as app from "tns-core-modules/application";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";

import { SqliteService } from "./shared/services/sqlite.service";
import { BackendService } from "./shared/backend.service";
import * as Connectivity from "tns-core-modules/connectivity";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})

export class AppComponent implements OnInit {
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;
    public connectionType: string;

    constructor(private router: Router, private routerExtensions: RouterExtensions, private database: SqliteService, private zone: NgZone) {
        // Use the component constructor to inject services.
        this.database.getdbConnection()
            .then(db => {
                db.execSQL("CREATE TABLE IF NOT EXISTS badges ( id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT , badge TEXT NOT NULL , city TEXT NOT NULL, soat_exp_date NUMERIC, tecmec_exp_date NUMERIC, license_exp_date NUMERIC, next_oil_change NUMERIC)").then(() => {
                }, error => {
                    console.log("CREATE TABLE ERROR", error);
                });
            }, error => {
                console.log("OPEN DB ERROR", error);
            });
        setInterval(() => {
            this.checkInternet()
            console.log("Funcionando...")
        }, 30000);
    }

    ngOnInit(): void {

        this._activatedUrl = "/home";
        this._sideDrawerTransition = new SlideInOnTopTransition();

        this.router.events
            .pipe(filter((event: any) => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);


    }

    connectionToString(connectionType: number): string {
        switch(connectionType) {
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

        console.log("Estado de subida: ",BackendService.upload)
        console.log("Estado de conexión: ",this.connectionType)

        if (this.connectionType !== '0' && BackendService.upload === true) {
            console.log("Hay conexión, se sube")
            BackendService.upload = false;
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
