import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BackendService } from '../shared/backend.service';
import { SqliteService } from '../shared/services/sqlite.service';

@Injectable({
    providedIn: 'root'
})
export class UserapiService {
    constructor(private http: HttpClient, private database: SqliteService) { }
    obDetail;
    server = "http://138.68.31.167:5000"

    getobDetail() {
        let object = this.obDetail;
        return object;
    }


    setobDetail(obj: any): void {
        this.obDetail = obj;
    }

    login(data) {
        let json = {
            cell: data.cell
        }
        let params = json;
        console.log(params)
        return this.http.post(`${this.server}/login`, json)
    }

    checkCode(data) {

        let json = {
            cell: data.cell,
            token: data.token
        }
        let params = json;
        console.log(params)
        return this.http.post(`${this.server}/registeruser`, json)
    }

    upload(data) {

        let json = {
            badge: data.badge,
            cell: BackendService.phoneNumber
        }
        let params = json;
        console.log(params)
        return this.http.post(`${this.server}/savebadge`, json)
    }

    download(data) {
        let params = new HttpParams();
        params = params.append('cell', data.cell);
        // let json = {
        //     cell: data.cell
        // }
        // let params = json;
        console.log(params)
        return this.http.get(`${this.server}/getbadges`, {params: params})
    }

    logout() {
        BackendService.token = "";
        this.database.closedbConnection();
    }

}
