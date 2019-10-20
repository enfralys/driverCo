import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { setInterval } from "tns-core-modules/timer";
import { TNSFancyAlert } from 'nativescript-fancyalert';
import * as firebase from 'nativescript-plugin-firebase';
import { BackendService } from '~/app/shared/backend.service';

import { UserapiService } from '../../services/userapi.service';
import { SqliteService } from '~/app/shared/services/sqlite.service';


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
    processing = false;
    db: any;
    badges: Array<any>;

    constructor(private router: Router, private page: Page, private database: SqliteService, private userService: UserapiService) {
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

    async DownloadInfo() {
        console.log(BackendService.phoneNumber)

        let data = {
            cell: BackendService.phoneNumber
        }

        this.userService.download(data).subscribe(
            res => {
                let response: any = res;

                if (response) {
                    if (response !== 'empty') {
                        response.data.forEach(element => {
                            console.log(element.badge)
                            this.database.getdbConnection()
                                .then(db => {
                                    db.execSQL("INSERT INTO badges (badge, city, soat_exp_date, tecmec_exp_date, license_exp_date, next_oil_change) VALUES (?, ?, ?, ?, ?, ?)", [element.badge, element.city, element.soat_exp_date, element.tecmec_exp_date, element.license_exp_date, element.next_oil_change]).then(id => {
                                        console.log("INSERT RESULT", id);
                                        this.loadBadges();
                                    }, err => {
                                        console.log("INSERT ERROR", err);

                                    });
                                });
                        });
                        console.log('Cargando DB local');
                    } else {
                        console.log('No hay datos');
                    }
                }
            },
            err => {
                console.log(err);
            })
    }

    async loadBadges() {
        this.badges = [];
        this.database.getdbConnection()
            .then(db => {
                db.all("SELECT * FROM badges").then(rows => {
                    if (rows.length > 0) {
                        for (var row in rows) {
                            this.badges.push({
                                "badge": rows[row][1],
                                "city": rows[row][2],
                                "soat_exp_date": rows[row][3],
                                "tecmec_exp_date": rows[row][4],
                                "license_exp_date": rows[row][5],
                                "next_oil_change": rows[row][6]
                            });
                        }
                        this.db = db;
                    }
                }, error => {
                    console.log("SELECT ERROR", error);
                });
            });
    }

    async settoken() {
        await firebase.getCurrentPushToken().then(res => this.token = res);
        console.log(this.token)
    }

    async onExtractedValueChange(args) {

        // `args.value` includes only extracted characters, for instance
        // `1235551111` would be logged while the UI would display `(123) 555-1111`.
        this.user.code = args.value;
        console.log('Extracted value:', args.value);
        if (this.user.code.length > 5) {
            this.processing = true;
            if (!this.user.validate() || this.user.code !== String(BackendService.code)) {
                TNSFancyAlert.showWarning(
                    "¡Ups!",
                    "El código es incorrecto"
                );
                this.processing = false;
            } else {
                let data = {
                    cell: BackendService.phoneNumber,
                    token: this.token
                }

                this.userService.checkCode(data).subscribe(
                    res => {
                        if (res) {
                            BackendService.token = this.token;
                            this.processing = false;
                            this.DownloadInfo();
                            this.router.navigateByUrl('home');
                            console.log(JSON.stringify(res));
                            console.log("Token actual: ", BackendService.token);
                        }
                    },
                    err => {
                        console.log(err)
                        this.user.code = '';
                        this.processing = false;
                        TNSFancyAlert.showError(
                            "¡Ha ocurrido un problema!",
                            "No hemos podido verificar el código"
                        );
                    })
            }
        }
    }

    async submit() {
        this.processing = true;
        if (this.fails !== 3) {
            this.processing = false;
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
            this.processing = false;
            TNSFancyAlert.showWarning(
                "¡Ups!",
                "Parece que hay un problema con la recepción del código, intenta más tarde",
                "Vale"
            );
            this.fails = this.fails + 1;
        }
    }
}
