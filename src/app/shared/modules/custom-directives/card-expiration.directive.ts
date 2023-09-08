import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCardExpiration]'
})
export class CardExpirationDirective {

  constructor(private element: ElementRef) { }


  @HostListener('input', ['$event'])
  public onInput(event: Event): void {
    const inputElement = this.element.nativeElement as HTMLInputElement;
    let value = inputElement.value.replace(/\s+/g, '');
    value = value.replace(/\D/g, '');

    if (value.length > 4) {
      value = value.slice(0, 4);
    }

    if (value.length >= 2) {

      value = value.slice(0, 2) + '/' + value.slice(2);
    }

    inputElement.value = value;
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    const target = event.target as HTMLInputElement;

    if (event.key === 'Backspace') {
      if (target.selectionStart === target.selectionEnd && target.selectionStart === 3) {

        event.preventDefault();
        const value = target.value.split('');
        value.splice(2, 1);
        target.value = value.join('');
      }
    } else if (!/^\d$/.test(event.key)) {

      event.preventDefault();
    }
  }





}
