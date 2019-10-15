import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { registerElement } from "nativescript-angular/element-registry";
import { CardView } from "@nstudio/nativescript-cardview";
import { UserapiService } from "../services/userapi.service";
import { DatePipe } from '@angular/common';

registerElement("CardView", () => CardView);

@Component({
    selector: "Featured",
    moduleId: module.id,
    templateUrl: "./featured.component.html",
    styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

    badge;
    soat_exp_date;
    tecmec_exp_date;
    license_exp_date;
    next_oil_change;

    constructor(private userapi: UserapiService, private datePipe: DatePipe) {
        // Use the component constructor to inject providers.
    }

    getdetail() {
        this.badge = this.userapi.getobDetail();

        if (this.badge.soat_exp_date !== null) {
            this.soat_exp_date = this.datePipe.transform(this.badge.soat_exp_date, 'dd/MM/yyyy');
        } else {
            this.soat_exp_date = "NO POSEE";
        }

        if (this.badge.tecmec_exp_date !== null) {
            this.tecmec_exp_date = this.datePipe.transform(this.badge.tecmec_exp_date, 'dd/MM/yyyy');
        }else {
            this.tecmec_exp_date = "NO POSEE";
        }

        if (this.badge.license_exp_date !== null) {
            this.license_exp_date = this.datePipe.transform(this.badge.license_exp_date, 'dd/MM/yyyy');
        }else {
            this.license_exp_date = "NO POSEE";
        }

        if (this.badge.next_oil_change !== null) {
            this.next_oil_change = this.datePipe.transform(this.badge.next_oil_change, 'dd/MM/yyyy');
        }else {
            this.next_oil_change = "NO POSEE";
        }
        console.log(this.badge);
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.getdetail();
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
