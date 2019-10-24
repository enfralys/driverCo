import { Component, OnInit,NgZone  } from '@angular/core';
import { SocketIO } from "nativescript-socketio";

@Component({
  selector: 'ns-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor( private socketIO: SocketIO,
    private ngZone: NgZone) {
    
   }

  ngOnInit() {
     this.socketIO.on("getDoc", data => {
      this.ngZone.run(() => {
    console.log(data);
      });
    });
  }
  test() {
    let username ="a3a"
    console.log('test');
    this.socketIO.emit('getDoc', {username}, (ack) => {
      console.log('ack', ack);
  });
  }

}
