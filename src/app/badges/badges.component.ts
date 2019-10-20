import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Page } from "tns-core-modules/ui/page";
import * as app from "tns-core-modules/application";

import { SqliteService } from "../shared/services/sqlite.service";
import { UserapiService } from "../services/userapi.service";

import { registerElement } from "nativescript-angular/element-registry";
import { CardView } from "@nstudio/nativescript-cardview";
import { RouterExtensions } from "nativescript-angular/router";

//SQLite library
var Sqlite = require("nativescript-sqlite");

registerElement("CardView", () => CardView);

@Component({
    selector: "Badges",
    moduleId: module.id,
    templateUrl: "./badges.component.html",
    styleUrls: ['./badges.component.scss']

})
export class BadgesComponent implements OnInit {

    cantidad: boolean = false;
    db: any;
    badges: Array<any>;


    constructor(private _page: Page, private userapi: UserapiService, private database: SqliteService, private router: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.selectBadges();
    }

    setdetail(obj) {
        this.userapi.setobDetail(obj);
        this.router.navigate(['featured'],
            {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 380,
                    curve: "easeIn"
                }
            });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    async selectBadges() {
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
                                "next_oil_change": rows[row][6]
                            });
                        }
                        this.db = db;
                        this.cantidad = true;
                    }
                }, error => {
                    console.log("SELECT ERROR", error);
                });
            });
    }

    addBadge() {
        this.router.navigate(['addplaca'],
            {
                animated: true,
                transition: {
                    name: "slideTop",
                    duration: 380,
                    curve: "easeIn"
                }
            });
    }

}
