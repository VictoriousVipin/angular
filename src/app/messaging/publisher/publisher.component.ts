import { Component, OnInit } from '@angular/core';
import {MessagingService} from '../messaging.service';
import { Chat } from '../../interfaces/apidata.interface';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {
  public message: string;
  public messageHistory: Chat[] = [];
  constructor(private messagingService: MessagingService) {
    this.messagingService.message2.subscribe((value) => {
      if(value.trim()) {
        const chat: Chat = JSON.parse(value);
        this.messageHistory.push(chat);
      }
    });
   }

  ngOnInit() {
  }
  sendMessage() {
    const msg = {
      name: 'Ritesh',
      message: this.message
    };
    this.messageHistory.push(msg);
    this.messagingService.publishMessage(msg);
    this.message = '';
  }

}
