import { Component, OnInit, NgZone, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import * as SocketIO from 'nativescript-socket.io';
import { Page } from 'tns-core-modules/ui/page/page';
import { BackendService } from '../shared';
import { TextField } from 'tns-core-modules/ui/text-field/text-field';

@Component({
    selector: 'ns-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

    public me: String;


    mensaje:String;
    @ViewChild("list", {static: false}) lv: ElementRef;
  
 
    


    chats$;

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

    so = SocketIO.connect('http://138.68.31.167:4999', this.options);
    countries = [0]

    constructor(private ngZone: NgZone, private page: Page) {
        this.page.actionBarHidden = false;
        console.log(this.so);
        console.log("aja mamsita");
        SocketIO.enableDebug();
    }

    ngOnInit() {
        this.so.on("messages", data => {
            console.log("conecto");
            this.ngZone.run(() => {
                this.countries.push(data)
            });
        });

        this.chats$ = this.countries;
    }

    // test() {
    //     let username = "a3a"
    //     console.log('test');
    //     this.so.emit('prueba', {
    //         id: 'someone',
    //     });

    // }
  
    public onTextChange(args) {
        let textField = <TextField>args.object;

        this.mensaje = textField.text;
      
    }

    public onReturn(args) {
        let textField = <TextField>args.object;

        console.log("onReturn",textField);
        
    }

sendMessage() {
        let msj = {
            msj :this.mensaje,
            date: new Date(),
            in : true,
            cell: BackendService.phoneNumber
        }
        console.log(this.mensaje);
        this.so.emit('support',msj, res =>{
            this.mensaje = ""
})
     }

    // public ngAfterViewInit() {
    //     this.list = this.lv.nativeElement;
    //     this.textfield = this.tf.nativeElement;
    // }

    // scroll(count: number) {
    //     console.log("scrolling to ", count)
    //     this.list.scrollToIndex(count - 1);
    //     this.list.refresh();
    // }

    // chat(message: string) {
    //     this.firebaseService.chat(message).then((data: any) => {
    //         let count = this.list.items.length;
    //         this.scroll(count);
    //     });
    //     this.textfield.text = '';
    // }

    // filter(sender) {
    //     if (sender == BackendService.token) {
    //         return "me"
    //     }
    //     else {
    //         return "them"
    //     }
    // }

    // align(sender) {
    //     if (sender == BackendService.token) {
    //         return "right"
    //     }
    //     else {
    //         return "left"
    //     }
    // }

    // showImage(sender) {
    //     if (sender == BackendService.token) {
    //         return "collapsed"
    //     }
    //     else {
    //         return "visible"
    //     }
    // }




}
