import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardFormat]'
})
export class CardFormatDirective {

  constructor(private element: ElementRef) { }

  @HostListener('input', ['$event'])
  public onInput(event: Event): void {
    // console.log('works directory');
    const inputElement = this.element.nativeElement as HTMLInputElement;
    //process input info
    let value = inputElement.value.replace(/\s+/g, '');
    value = value.replace(/\D/g, '');
    //limit 16 digits
    value = value.slice(0, 16);
    if (value) {
      const matches = value.match(new RegExp('.{1,4}', 'g'));
      if (matches) {
        value = matches.join(' ');
      } else {
        value = '';
      }
    } else {
      value = '';
    }
    inputElement.value = value;
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (!/^\d$/.test(event.key) && event.key !== 'Backspace') {
      event.preventDefault();
    }
  }

}
