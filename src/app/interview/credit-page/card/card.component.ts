import { Component, Input } from '@angular/core';
import { CardService } from 'src/app/shared/services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  constructor(private cardService : CardService){}

  get cardNumber(): string {
    return this.cardService.getCardNumber();
  }

  get cardName():string{
    return this.cardService.getCardName();
  }


}
