import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialInputComponent} from './material-input.component';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {FormatCurrencyDirective} from '../../../_directives/format-currency.directive';


@NgModule({
  declarations: [
    MaterialInputComponent,
    FormatCurrencyDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    MaterialInputComponent,
    FormatCurrencyDirective
  ]
})
export class MaterialInputModule {
}
