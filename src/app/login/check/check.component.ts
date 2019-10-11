import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { setInterval } from "tns-core-modules/timer";
import { TNSFancyAlert } from 'nativescript-fancyalert';
import * as firebase from 'nativescript-plugin-firebase';
import { BackendService } from '~/app/shared/backend.service';

import { UserapiService } from '../../services/userapi.service';


@Component({
    selector: 'ns-check',
    templateUrl: './check.component.html',
    styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

    user = {
        number: BackendService.phoneNumber,
        code: '',
        validate() {
            if (this.code.length < 5) {
                console.log("Código en blanco")
                return false;
            }
            return true;
        }
    }
    token;
    phoneNumber = BackendService.phoneNumber;
    countdown = 15;
    fails = 0;
    isLoggingIn = true;

    constructor(private router: Router, private page: Page, private userService: UserapiService) {
        this.page.actionBarHidden = true;
    }

    ngOnInit() {
        this.settoken();
        this.updateCurrenTime();
        setInterval(() => { this.updateCurrenTime() }, 1000);
        console.log('Este es el número: ' + BackendService.phoneNumber)
        console.log('Este es el code: ' + BackendService.code)
    }

    ngOnChanges() {
        this.updateCurrenTime();
    }

    updateCurrenTime() {
        if (this.countdown !== 0) {
            this.countdown = this.countdown - 1;
        }
    }

    async   settoken() {
        await firebase.getCurrentPushToken().then(res => this.token = res);
        console.log(this.token)
    }
    async onExtractedValueChange(args) {
        // `args.value` includes only extracted characters, for instance
        // `1235551111` would be logged while the UI would display `(123) 555-1111`.
        this.user.code = args.value;
        console.log('Extracted value:', args.value);
        if (this.user.code.length > 5) {
            if (!this.user.validate() || this.user.code !== String(BackendService.code)) {
                TNSFancyAlert.showWarning(
                    "¡Ups!",
                    "El código es incorrecto"
                );
            } else {
                let data = {
                    cell: BackendService.phoneNumber,
                    token: this.token
                }

                this.userService.checkCode(data).subscribe(
                    res => {
                        if (res) {
                            // this.router.navigate(['login-check',])
                            BackendService.token = this.token;
                            this.router.navigateByUrl('home');
                            console.log(JSON.stringify(res));

                            console.log("Token actual: ", BackendService.token);
                        }
                    },
                    err => {
                        console.log(err)
                        this.user.code = '';
                        TNSFancyAlert.showError(
                            "¡Ha ocurrido un problema!",
                            "No hemos podido verificar el código"
                        );
                    })
            }
        }
    }

    async submit() {
        if (this.fails !== 3) {
            TNSFancyAlert.showSuccess(
                "¡Mensaje Reenviado!",
                "El código ha sido reenviado de manera exitosa."
            );
            this.countdown = 15;
            this.fails = this.fails + 1;
            console.log(this.fails)

            let data = {
                cell: BackendService.phoneNumber
            }

            this.userService.login(data).subscribe(
                res => {
                    let response: any = res;

                    if (response) {
                        // BackendService.token = this.token;
                        BackendService.code = response.code;
                        console.log('Nuevo código: ', BackendService.code)
                        //    this.router.navigate(['home',])
                    }
                },
                err => {
                    console.log(err)
                    TNSFancyAlert.showError(
                        "¡Ha ocurrido un problema!",
                        "Por favor intente más tarde"
                    );
                })
        } else {
            TNSFancyAlert.showWarning(
                "¡Ups!",
                "Parece que hay un problema con la recepción del código, intenta más tarde",
                "Vale"
            );
            this.fails = this.fails + 1;
        }
    }
}
