import { Component, OnInit } from "@angular/core";
import { ScrollView, ScrollEventData } from 'tns-core-modules/ui/scroll-view';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { View } from 'tns-core-modules/ui/core/view';
import { Page } from "tns-core-modules/ui/page";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls:['./home.component.scss']

})
export class HomeComponent implements OnInit {
    cantidad=[0,1,2,3,4,5,6]
    constructor(private _page: Page) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

}
