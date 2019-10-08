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
        // if (BackendService.token !== undefined) {
        //     this.router.navigateByUrl('home')
        // }
    }

    ngOnInit() {
        console.log("Verificación de código: ", BackendService.token)
    }

    onExtractedValueChange(args) {
        // `args.value` includes only extracted characters, for instance
        // `1235551111` would be logged while the UI would display `(123) 555-1111`.
        this.user.number = args.value;
        console.log('Extracted value:', args.value);
        console.log('Número en variable: ', this.user.number)
    }

    async submit() {

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
                let response: any = res;

                if (response)
                {
                    // BackendService.token = this.token;
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
