import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {
    constructor(private http: HttpClient) { }

    server = "http://138.68.31.167:5000"


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


}
