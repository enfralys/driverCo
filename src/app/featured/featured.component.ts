import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { registerElement } from "nativescript-angular/element-registry";
import { CardView } from "@nstudio/nativescript-cardview";
import { UserapiService } from "../services/userapi.service";
import { DatePipe } from '@angular/common';
import { RouterExtensions } from "nativescript-angular/router/router.module";

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

    constructor(private userapi: UserapiService, private datePipe: DatePipe, private router: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    getdetail() {
        this.badge = this.userapi.getobDetail();
        console.log(this.badge.tecmec_exp_date)

        if (this.badge.soat_exp_date !== null || this.badge.soat_exp_date !== "null") {
            this.soat_exp_date = this.datePipe.transform(this.badge.soat_exp_date, 'dd/MM/yyyy');
        } else {
            this.soat_exp_date = "SIN INFORMACIÓN";
        }

        if (this.badge.tecmec_exp_date !== null || this.badge.tecmec_exp_date !== "null") {
            this.tecmec_exp_date = this.datePipe.transform(this.badge.tecmec_exp_date, 'dd/MM/yyyy');
        } else {
            this.tecmec_exp_date = "SIN INFORMACIÓN";
        }

        if (this.badge.license_exp_date !== null || this.badge.license_exp_date !== "null") {
            this.license_exp_date = this.datePipe.transform(this.badge.license_exp_date, 'dd/MM/yyyy');
        } else {
            this.license_exp_date = "SIN INFORMACIÓN";
        }

        if (this.badge.next_oil_change !== null || this.badge.next_oil_change !== "null") {
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
}
