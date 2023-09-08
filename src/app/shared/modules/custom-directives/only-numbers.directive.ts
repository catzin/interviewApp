import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumbers]'
})
export class OnlyNumbersDirective {

  constructor() { }
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (!/^\d$/.test(event.key) && event.key !== 'Backspace') {
      event.preventDefault();
    }
  }

}
