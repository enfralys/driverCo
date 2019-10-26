import { Injectable } from '@angular/core';
import { TextField } from "tns-core-modules/ui/text-field";
import { BackendService } from '../backend.service';

//SQLite library
var Sqlite = require("nativescript-sqlite");

@Injectable({
    providedIn: 'root'
})
export class SqliteService {
db;
    constructor() { }

    public getdbConnection() {
        return new Sqlite('my.db');
    } public closedbConnection() {
        new Sqlite('my.db')
            .then((db) => {
                db.close();
            });
    }


   async update(obj) {
          this.db =await this.getdbConnection()
        console.log(this.db);
        console.log(obj,"este es el objeto");
		this.db.execSQL("update badges set city = ?, soat_exp_date = ?, tecmec_exp_date = ?, license_exp_date = ?, next_oil_change = ? where badge = ?", [ obj.city, obj.soat_exp_date, obj.tecmec_exp_date, obj.license_exp_date, obj.next_oil_change,obj.badge]).then(id => {
            console.log(id);
            BackendService.upload = true;

		}, error => {
            console.log(error);
			alert('An error occurred while adding an item to your list.');
		
		});

	}


}
