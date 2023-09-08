import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFormatDirective } from './card-format.directive';
import { CardExpirationDirective } from './card-expiration.directive';
import { OnlyLettersDirective } from './only-letters.directive';
import { OnlyNumbersDirective } from './only-numbers.directive';



@NgModule({
  declarations: [
    CardFormatDirective,
    CardExpirationDirective,
    OnlyLettersDirective,
    OnlyNumbersDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[CardFormatDirective,CardExpirationDirective,OnlyLettersDirective,OnlyNumbersDirective]
})
export class CustomDirectivesModule { }
