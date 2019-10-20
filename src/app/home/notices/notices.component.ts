import { Page } from "tns-core-modules/ui/page";
import { Component, OnInit } from "@angular/core";
import { View } from 'tns-core-modules/ui/core/view';
import { RouterExtensions } from "nativescript-angular/router";
import { UserapiService } from "~/app/services/userapi.service";
import { ScrollView, ScrollEventData } from 'tns-core-modules/ui/scroll-view';

@Component({
    selector: 'ns-notices',
    templateUrl: './notices.component.html',
    styleUrls: ['./notices.component.scss']
})
export class NoticesComponent implements OnInit {

    //vars
    new;

    constructor(private _page: Page, private userapi: UserapiService, private router: RouterExtensions) { }

    ngOnInit() {
        this.getdetail();
    }

    getdetail() {
        this.new = this.userapi.getobDetail();
        console.log('Este es el array: ', this.new)
    }

    onScroll(event: ScrollEventData, scrollView: ScrollView, topView: View) {
        // If the header content is still visiible
        // console.log(scrollView.verticalOffset);
        if (scrollView.verticalOffset < 250) {
            const offset = scrollView.verticalOffset / 2;
            if (scrollView.ios) {
                // iOS adjust the position with an animation to create a smother scrolling effect.
                topView.animate({ translate: { x: 0, y: offset } }).then(() => { }, () => { });
            } else {
                // Android, animations are jerky so instead just adjust the position without animation.
                topView.translateY = Math.floor(offset);
            }
        }
    }

    onDrawerButtonTap(): void {
        this.router.navigate(['home'],
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
