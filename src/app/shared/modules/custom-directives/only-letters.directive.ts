import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyLetters]'
})
export class OnlyLettersDirective {

  constructor() { }
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {

    const input = event.target as HTMLInputElement;
    const value = input.value + event.key;
    //regex for only letters
    if (!/^[a-zA-Z\s]*$/.test(value) && event.key !== 'Backspace') {
      event.preventDefault(); //stops entry
    }
  }
  

}
