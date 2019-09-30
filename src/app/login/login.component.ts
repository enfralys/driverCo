import { Component, OnInit } from '@angular/core';
import { User, BackendService } from '../shared';
import { Page } from 'tns-core-modules/ui/page/page';
import { Router } from '@angular/router';
import { UserapiService } from '../services/userapi.service';
import { TNSFancyAlert, TNSFancyAlertButton } from "nativescript-fancyalert";

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {
	user: User;
token;
	isLoggingIn = true;
  constructor(private page:Page, private router:Router, private userService: UserapiService) {
    this.page.actionBarHidden=true;
  this.user = new User();
  this.user.number="";
  this.user.name="";
   }
  ngOnInit() {
  }
  async submit(){
    if (this.token==undefined) {  this.token="alsdjaldasjdkad"}
      

    if (!this.user.validate())  {
      TNSFancyAlert.showWarning(
        "Cuidado!",
        "Por favor completa!",
        "Minimo 10 Digitos!"
      );
       
    }else{
      let data = {
        cell:this.user.number,
        token:this.token 
      }
   /** 
     this.userService.login(data).subscribe(res=>{
        if(res){
          BackendService.token = this.token;
          this.router.navigate(['home',])
        }else{
          this.router.navigate(['home',])

        }
     })
      */
     this.router.navigate(['home',])
      console.log("funciono todo y paso",  this.token )
    
    }

 
  }
}
