import { Injectable } from '@angular/core';

//SQLite library
var Sqlite = require("nativescript-sqlite");

@Injectable({
    providedIn: 'root'
})
export class SqliteService {

    constructor() { }

    public getdbConnection() {
        return new Sqlite('my.db');
    } public closedbConnection() {
        new Sqlite('my.db')
            .then((db) => {
                db.close();
            });
    }

}
