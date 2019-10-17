import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { SqliteService } from "../shared/services/sqlite.service";
import { BackendService } from "../shared/backend.service";
import { UserapiService } from "../services/userapi.service";
import { TNSFancyAlert } from "nativescript-fancyalert";

@Component({
    selector: "Settings",
    moduleId: module.id,
    templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {

    db: any;
    badges: Array<any>;

    constructor(private database: SqliteService, private userService: UserapiService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.loadBadges();
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
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
                                "next_oil_change": rows[row][6]
                            });
                        }
                        this.db = db;
                    }
                }, error => {
                    console.log("SELECT ERROR", error);
                });
            });
    }

    submit() {
        let data = {
            badge: this.badges
        }

        console.log(data.badge)

        this.userService.upload(data).subscribe(
            res => {
                if (res) {
                    console.log(JSON.stringify(res));
                }
            },
            err => {
                console.log(err)
                TNSFancyAlert.showError(
                    "¡Ha ocurrido un problema!",
                    "No se ha podido sincronizar"
                );
            })
    }
}
