import { Component, OnInit } from '@angular/core';
import { TNSFancyAlert } from 'nativescript-fancyalert';
import { BackendService } from '../shared/backend.service';
import { EventData } from "tns-core-modules/data/observable";
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { RouterExtensions } from "nativescript-angular/router";
import { SqliteService } from "../shared/services/sqlite.service";

@Component({
    selector: 'addplaca',
    templateUrl: './addplaca.component.html',
    styleUrls: ['./addplaca.component.css'],
    moduleId: module.id,
})
export class AddplacaComponent implements OnInit {

    //vars
    badge: string = "";
    city;
    soat_exp_date;
    tecmec_exp_date;
    license_exp_date;
    next_oil_change;
    processing = false;


    minDate: Date = new Date(1975, 0, 29);
    maxDate: Date = new Date(2045, 4, 12);

    items: Array<string> = ['Bogota', 'Cali', 'Envigado', 'Medellin'];

    db: any;
    badges: Array<any>;

    constructor(private router: RouterExtensions, private database: SqliteService) {

    }

    ngOnInit() {
    }

    public onSelectedIndexChanged(args: EventData) {
        const picker = <ListPicker>args.object;
        this.city = this.items[picker.selectedIndex];
        // console.log(this.city)
        // console.log(`index: ${picker.selectedIndex}; item" ${this.items[picker.selectedIndex]}`);
    }

    soat(args) {
        var date = args.value.toString();
        var arr = new Array();
        arr = date.split(" ");

        var month = this.getMonthFromString(arr[1]);
        var fullDate = arr[3] + "-" + month + "-" + arr[2];
        this.soat_exp_date = fullDate;
        // console.log(fullDate)
        // console.log("Date New value: " + args.value);
        // console.log("Date value: " + args.oldValue);
    }

    tecnoMech(args) {
        var date = args.value.toString();
        var arr = new Array();
        arr = date.split(" ");

        var month = this.getMonthFromString(arr[1]);
        var fullDate = arr[3] + "-" + month + "-" + arr[2];
        this.tecmec_exp_date = fullDate;
        // console.log(fullDate)
        // console.log("Date New value: " + args.value);
        // console.log("Date value: " + args.oldValue);
    }

    license(args) {
        var date = args.value.toString();
        var arr = new Array();
        arr = date.split(" ");

        var month = this.getMonthFromString(arr[1]);
        var fullDate = arr[3] + "-" + month + "-" + arr[2];
        this.license_exp_date = fullDate;
        // console.log(fullDate)
        // console.log("Date New value: " + args.value);
        // console.log("Date value: " + args.oldValue);
    }

    oilChange(args) {
        var date = args.value.toString();
        var arr = new Array();
        arr = date.split(" ");

        var month = this.getMonthFromString(arr[1]);
        var fullDate = arr[3] + "-" + month + "-" + arr[2];
        this.next_oil_change = fullDate;
        // console.log(fullDate)
        // console.log("Date New value: " + args.value);
        // console.log("Date value: " + args.oldValue);
    }

    getMonthFromString(mon) {
        return new Date(Date.parse(mon + " 1, 2019")).getMonth() + 1
    }

    onItemSelected(args) {
        console.log(args.value);
    }

    mask(args) {
        console.log('Valor: ', args.value)
        console.log('Placa: ', this.badge)
        console.log('Longitud: ', args.value.length)
        if (args.value.length === 6 && !args.value.includes('-') && !args.value.includes(' ')) {
            let a = args.value.substring(0, 3);
            let b = args.value.substring(3, 6);
            console.log(a + b);

            let res = a + '-' + b;
            this.badge = res;
            console.log(this.badge)
        }
    }

    onDrawerButtonTap() {
        this.router.navigate(['badges'],
            {
                animated: true,
                transition: {
                    name: "slideBottom",
                    duration: 380,
                    curve: "easeIn"
                }
            });
    }

    submit() {
        this.processing = true;

        console.log('Datos almacenados: ')
        console.log('Placa: ', this.badge)
        console.log('Ciudad: ', this.city)
        console.log('Soat:', this.soat_exp_date)
        console.log('Tecomecanica: ', this.tecmec_exp_date)
        console.log('Licencia: ', this.license_exp_date)
        console.log('Cambio de Aceite: ', this.next_oil_change)

        if (this.badge.length > 4) {
            this.database.getdbConnection()
                .then(db => {
                    db.execSQL("INSERT INTO badges (badge, city, soat_exp_date, tecmec_exp_date, license_exp_date, next_oil_change) VALUES (?, ?, ?, ?, ?, ?)", [this.badge, this.city, this.soat_exp_date, this.tecmec_exp_date, this.license_exp_date, this.next_oil_change]).then(id => {
                        console.log("INSERT RESULT", id);
                        // this.fetch();
                        TNSFancyAlert.showSuccess(
                            "¡Excelente!",
                            "Sus datos fueron guardados"
                        );
                        this.processing = false;
                        this.router.navigate(['badges'],
                            {
                                animated: true,
                                transition: {
                                    name: "slideBottom",
                                    duration: 380,
                                    curve: "easeIn"
                                }
                            });
                        BackendService.upload = true;
                    }, err => {
                        this.processing = false;
                        console.log("INSERT ERROR", err);
                        TNSFancyAlert.showError(
                            "¡Ha ocurrido un problema!",
                            "No se ha podido guardar"
                        );
                    });
                });
        } else {
            TNSFancyAlert.showWarning(
                "¡Atención!",
                "La placa no es válida"
            );
            this.processing = false;
        }
    }
}
