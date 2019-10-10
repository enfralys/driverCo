import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { setInterval } from "tns-core-modules/timer";
import { TNSFancyAlert } from 'nativescript-fancyalert';
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

    phoneNumber = BackendService.phoneNumber;
    countdown = 15;
    fails = 0;
    isLoggingIn = true;

    constructor(private router: Router, private page: Page, private userService: UserapiService) {
        this.page.actionBarHidden = true;
    }

    ngOnInit() {
        this.updateCurrenTime();
        setInterval(() => { this.updateCurrenTime() }, 1000);
        console.log('Esto es el token: ' + BackendService.token)
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

    onExtractedValueChange(args) {
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
                    token: BackendService.token
                }

                this.userService.checkCode(data).subscribe(res => {
                    if (res) {
                        // this.router.navigate(['login-check',])
                        this.router.navigateByUrl('home')
                        console.log(JSON.stringify(res))
                    }
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
        } else {
            TNSFancyAlert.showWarning(
                "¡Ups!",
                "Parece que hay un problema con la recepción del código, intenta más tarde",
                "Vale"
            );
            this.fails = this.fails + 1;
        }

        // console.log(this.user.code)
        // if (!this.user.validate()) {
        //     TNSFancyAlert.showWarning(
        //         "¡Ups!",
        //         "El código es incorrecto"
        //     );
        // } else {
        //     if (this.user.code === String(BackendService.code)) {
        //         let data = {
        //             cell: BackendService.phoneNumber,
        //             token: BackendService.token
        //         }

        //         this.userService.checkCode(data).subscribe(res => {
        //             if (res) {
        //                 // this.router.navigate(['login-check',])
        //                 this.router.navigateByUrl('home')
        //                 console.log(JSON.stringify(res))
        //             } else {
        //                 //    this.router.navigate(['home',])
        //                 TNSFancyAlert.showError(
        //                     "¡El código no es válido!",
        //                     "Por favor ingrese el código enviado"
        //                 );
        //             }
        //         })
        //         // this.router.navigateByUrl('home')
        //     } else {
        //         TNSFancyAlert.showError(
        //             "¡El código no es válido!",
        //             "Por favor ingrese el código enviado"
        //         );
        //     }
        // }
    }
}
