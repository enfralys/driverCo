import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {
    constructor(private http: HttpClient) { }

    server = "http://134.209.117.20:5000"


    login(data) {

      let json = {
        cell: data.cell,
        token: data.token
      }
      let params = json;
      console.log(params)
      return this.http.post(`${this.server}/registeruser`, json)
    }
  
    

}
