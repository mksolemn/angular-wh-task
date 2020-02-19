import {Component, NgModule} from '@angular/core';
import {FormatCurrencyDirective} from './format-currency.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CommonModule} from '@angular/common';

@Component({
  template: `<input appFormatCurrency>`,
})

class HostComponent {
}

@NgModule({
  declarations: [HostComponent, FormatCurrencyDirective],
  exports: [HostComponent],
})
class HostModule {
}

// * Test suite:
describe('FormatCurrencyDirective', () => {
  let component: HostComponent;
  let element: HTMLElement;
  let fixture: ComponentFixture<HostComponent>;
  let inputEl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, HostModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    inputEl = element.querySelector('input');
    inputEl.value = '12999';
    fixture.detectChanges();
  });

  it('should create a host instance', () => {
    expect(component).toBeTruthy();
  });

  it('should format currency with thousand decimals', () => {
    expect(inputEl.value).toBe('12,999');
  });
});
