import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appFormatCurrency]'
})
export class FormatCurrencyDirective {
  private _originNumber: number;
  constructor(private elRef: ElementRef) {
  }

  @HostListener('keyup', ['$event']) onKeyUp(e) {
    this._originNumber = parseFloat(e.target.value.replace(/,/g, ''));
    if (this._originNumber) {
      this.elRef.nativeElement.value = this.formatNumber(this._originNumber);
    }
  }

  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

}
