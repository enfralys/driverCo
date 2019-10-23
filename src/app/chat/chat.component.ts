import { Component, OnInit } from '@angular/core';
import { SocketIO } from 'nativescript-socketio';

@Component({
  selector: 'ns-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }
  
  let  socketIO = new SocketIO(url, opts);
  ngOnInit() {
  }

}
