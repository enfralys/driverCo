import { Component, OnInit } from '@angular/core';
import { User, BackendService } from '../shared';
import { Page } from 'tns-core-modules/ui/page/page';
import { Router } from '@angular/router';
import { UserapiService } from '../services/userapi.service';
import { TNSFancyAlert, TNSFancyAlertButton } from "nativescript-fancyalert";

@Component({
    selector: 'ns-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    moduleId: module.id,
})
export class LoginComponent implements OnInit {
    user: User;
    token;
    isLoggingIn = true;

    constructor(private page: Page, private router: Router, private userService: UserapiService) {
        this.page.actionBarHidden = true;
        this.user = new User();
        this.user.number = "";
        this.user.name = "";
        if (BackendService.token !== undefined) {
            this.router.navigateByUrl('home')
        }
    }

    ngOnInit() {

    }

    async submit() {
        if (this.token == undefined)
        {
            this.token = this.makeid(16)
        }


        if (!this.user.validate())
        {
            TNSFancyAlert.showWarning(
                "¡Ha ocurrido un problema!",
                "El número no es válido"
            );

        } else {
            let data = {
                cell: this.user.number
            }

            this.userService.login(data).subscribe(res => {
                if (res)
                {
                    let response: any = res;
                    BackendService.token = this.token;
                    BackendService.phoneNumber = this.user.number;
                    BackendService.code = response.code;
                    this.router.navigate(['login-check',])
                    //    this.router.navigate(['home',])
                } else {
                    //    this.router.navigate(['home',])
                    TNSFancyAlert.showError(
                        "¡Ha ocurrido un problema!",
                        "El servidor no se encuentra disponible"
                    );
                }
            })
        }
    }

    makeid(length)
    {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++)
        {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
}
