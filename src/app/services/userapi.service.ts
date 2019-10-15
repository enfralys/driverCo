import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {
    constructor(private http: HttpClient) { }
    obDetail;
    server = "http://138.68.31.167:5000"

     getobDetail() {
      let object = this.obDetail;
      return object;
    }

    
    setobDetail(obj:any):void {
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


}
