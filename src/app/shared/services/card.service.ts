import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cardNumberSubject = new BehaviorSubject<string>('');
  private cardNameSubject  = new BehaviorSubject<string>('');

  constructor() { }

  public emitCardNumber(cardNumber: string) {
    this.cardNumberSubject.next(cardNumber);
  }

  public emitCardName(cardName: string) {
    this.cardNameSubject.next(cardName);
  }

  public getCardNumber(): string {
    return this.cardNumberSubject.value;
  }

  public getCardName(): string {
    return this.cardNameSubject.value;
  }


}
