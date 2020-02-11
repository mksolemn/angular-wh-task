import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appFormatCurrency]'
})
export class FormatCurrencyDirective {
  constructor(private elRef: ElementRef) {
  }

  @HostListener('keyup', ['$event']) onKeyUp(e) {
      console.log();

      return 'NO!';
  }

}
