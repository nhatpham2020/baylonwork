import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuneditService {

  private messageSource = new BehaviorSubject('Dragon');
  currentMessage = this.messageSource.asObservable();

  private fireMessageSource = new BehaviorSubject('Not Ready');
  firemessage = this.fireMessageSource.asObservable();
  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
  fireMessage(message: string) {
    this.fireMessageSource.next(message);
  }
}
