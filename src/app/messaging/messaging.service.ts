import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import {Chat} from '../interfaces/apidata.interface';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  public message = new Subject<string>();
  public message2 = new BehaviorSubject<string>('{"name":"Vipin","message":"Hi RItesh"}');
  public message3 = new Subject<number>();
  public msgObservable: Observable<number>;
  private counter: number = 0;
  constructor() { 
    this.msgObservable = this.message3.asObservable();

    var interval = setInterval(() => {
      this.counter++;
      this.message3.next(this.counter);
      if(this.counter > 10) {
        clearInterval(interval); 
      }
    }, 1000)
  }

  publishMessage(message: Chat) {
    const msg = JSON.stringify(message);
    this.message.next(msg);
  }
  publishMessage2(message: Chat) {
    const msg = JSON.stringify(message);
    this.message2.next(msg);
  }
}
