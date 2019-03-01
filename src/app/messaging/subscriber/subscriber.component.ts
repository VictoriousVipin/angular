import { Component, OnInit } from '@angular/core';
import {MessagingService} from '../messaging.service';
import {Chat} from '../../interfaces/apidata.interface';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.css']
})
export class SubscriberComponent implements OnInit {
  public message: string;
  public messageHistory: Chat[] = [];
  public msg: number;
  constructor(private messagingService: MessagingService) {
    this.messagingService.message.subscribe((value) => {
      if(value.trim()) {
        const chat: Chat = JSON.parse(value);
        this.messageHistory.push(chat);
      }
    });

    const subscriber = this.messagingService.msgObservable.subscribe((value) => {
      this.msg = value;
      if(this.msg > 5) {
        subscriber.unsubscribe();
      }
    })
   }

  ngOnInit() {
  }

  sendMessage() {
  const msg = {
    name: 'Vipin',
    message: this.message
  };
  this.messageHistory.push(msg);
  this.messagingService.publishMessage2(msg);
    this.message = '';
  }

}
