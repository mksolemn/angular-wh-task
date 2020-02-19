import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appFormatCurrency]'
})
export class FormatCurrencyDirective implements OnInit {
  private _originNumber: number;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.elRef.nativeElement.value = this.formatNumber(this.elRef.nativeElement.value);
  }

  @HostListener('keyup', ['$event']) onKeyUp(e) {
    this._originNumber = parseFloat(e.target.value.replace(/,/g, ''));
    if (this._originNumber && typeof this._originNumber === 'number') {
      this.elRef.nativeElement.value = this.formatNumber(this._originNumber);
    }
  }

  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

}
