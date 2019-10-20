import { Router } from '@angular/router';
import { User, BackendService } from '../shared';
import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import * as firebase from 'nativescript-plugin-firebase';
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
    processing = false;

    constructor(private page: Page, private router: Router, private userService: UserapiService) {
        this.page.actionBarHidden = true;
        this.user = new User();
        this.user.number = "";
        this.user.name = "";
        if (BackendService.token !== undefined) {
            this.router.navigateByUrl('home')
        }
        console.log("Token actual: ",BackendService.token)
    }

    onExtractedValueChange(args) {
        // `args.value` includes only extracted characters, for instance
        // `1235551111` would be logged while the UI would display `(123) 555-1111`.
        this.user.number = args.value;
        console.log('Extracted value:', args.value);
        console.log('Número en variable: ', this.user.number)
    }

    ngOnInit() {

    }

    async submit(){

        this.processing = true;
        // await firebase.getCurrentPushToken().then(res => BackendService.token = res);
        // console.log("Verificación de código: ", BackendService.token)

        if (!this.user.validate()) {
            TNSFancyAlert.showWarning(
                "¡Ha ocurrido un problema!",
                "El número no es válido"
            );
            this.processing = false;
        } else {
            let data = {
                cell: this.user.number
            }

            this.userService.login(data).subscribe(
                res => {
                    let response: any = res;

                    if (response) {
                        // BackendService.token = this.token;
                        BackendService.phoneNumber = this.user.number;
                        BackendService.code = response.code;
                        this.processing = false;
                        this.router.navigate(['login-check',])
                    } else {
                        TNSFancyAlert.showError(
                            "¡Ha ocurrido un problema!",
                            "El servidor no se encuentra disponible"
                        );
                        this.processing = false;
                    }
                },
                err => {
                    console.log(err)
                    TNSFancyAlert.showError(
                        "¡Ha ocurrido un problema!",
                        "Por favor intente más tarde"
                    );
                    this.processing = false;
                })
        }
    }

}
