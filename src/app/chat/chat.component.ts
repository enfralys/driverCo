import { Component, OnInit,NgZone  } from '@angular/core';
import * as SocketIO  from 'nativescript-socket.io';
import { BackendService } from '../shared';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
   options = {
    query: {
      token: 'SOME_TOKEN_HERE',
    },
    android: {
      // http://socketio.github.io/socket.io-client-java/apidocs/io/socket/client/IO.Options.html
    },
    ios: {
      // https://nuclearace.github.io/Socket.IO-Client-Swift/Enums/SocketIOClientOption.html
    }
  };
   so = SocketIO.connect('http://138.68.31.167:4999',this.options);
   countries = [0]
  constructor( private ngZone: NgZone,private page:Page) {
    this.page.actionBarHidden = true;
      console.log(this.so);
      SocketIO.enableDebug(); 
   }
  
   
  ngOnInit() {
     this.so.on("messages", data => {
       console.log("conecto");
      this.ngZone.run(() => {
      this.countries.push(data)
      });
    });
  }
  test() {
    let username ="a3a"
    console.log('test');
    this.so.emit('prueba', {
      id: 'someone',
    });
    
  }
sendMessage(){
  this.countries.push(9);
  this.so.emit('support',{
      message: "Esto es el chat1",
      id: "token de prueba"
  })
}




}
