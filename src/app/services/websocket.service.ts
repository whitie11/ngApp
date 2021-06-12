import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { environment } from '../../environments/environment';
import { MessageTest } from '../models/messageTest';
@Injectable({
  providedIn: 'root'
})

export class WebsocketService {
  private socket: Socket;
  private WS_URL = environment.urls.BASE_URL;

  constructor() {
  this.socket = io(this.WS_URL);
  console.log('Connection requested!');
  }



  // EMITTER
  sendMessage(msg: string) {
    this.socket.emit('checkForUpdate', { message: msg });
  }

  // HANDLER
  onNewMessage() {
    return new Observable<MessageTest>((observer) => {
      this.socket.on('newMessage', (msg: MessageTest) => {
        observer.next(msg);
      });
    });
  }
}
