import { Component, OnInit, Output } from "@angular/core";
import { ScrollView, ScrollEventData } from 'tns-core-modules/ui/scroll-view';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { View } from 'tns-core-modules/ui/core/view';
import { Page } from "tns-core-modules/ui/page";
import * as app from "tns-core-modules/application";

import { SqliteService } from "../shared/services/sqlite.service";
import { InternetConnectionService } from "../shared/services/internet-connection.service";
import { FeaturedComponent } from "../featured/featured.component";
import { UserapiService } from "../services/userapi.service";

//SQLite library
var Sqlite = require("nativescript-sqlite");
@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.scss']

})
export class HomeComponent implements OnInit {

    cantidad: boolean = false;
    db: any;
    badges: Array<any>;


    constructor(private _page: Page,private userapi:UserapiService, private database: SqliteService, public internetConnection: InternetConnectionService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.selectBadges();
    }

        setdetail(obj){
        this.userapi.setobDetail(obj);
        console.log(obj);
        }
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    selectBadges() {
        this.badges = [];
        this.database.getdbConnection()
            .then(db => {
                db.all("SELECT * FROM badges").then(rows => {
                    if (rows.length > 0) {
                        for (var row in rows) {
                            this.badges.push({
                                "badge": rows[row][1],
                                "city": rows[row][2]
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

}
