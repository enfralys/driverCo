import { Component, OnInit } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { CardView } from "@nstudio/nativescript-cardview";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

registerElement("CardView", () => CardView);

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {


    constructor() {

    }

    ngOnInit(): void { }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

}
