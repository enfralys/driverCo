import { Component, OnInit } from "@angular/core";
import { CardView } from "@nstudio/nativescript-cardview";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { UserapiService } from "../services/userapi.service";
import { RouterExtensions } from "nativescript-angular/router";
import { registerElement } from "nativescript-angular/element-registry";

registerElement("CardView", () => CardView);

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

    news;

    constructor(private userService: UserapiService, private router: RouterExtensions) {

    }

    ngOnInit(): void {
        this.loadNotices();
    }

    setdetail(obj) {
        this.userService.setobDetail(obj);
        console.log(obj);
        this.router.navigate(['notices'],
            {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 380,
                    curve: "easeIn"
                }
            });
    }

    loadNotices() {
        this.userService.getNews().subscribe(
            res => {
                let response: any = res;
                this.news = response.data;
            },
            err => {
                console.log(err);
            })
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
