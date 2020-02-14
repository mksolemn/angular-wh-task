import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataCommunicationComponent} from './data-communication.component';
import {MatFormFieldModule, MatGridListModule, MatInputModule, MatRadioModule} from '@angular/material';
import {DataCommunicationRoutingModule} from './data-communication-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormatCurrencyDirective} from '../_directives/format-currency.directive';
import { MaterialInputComponent } from './material-input/material-input.component';


@NgModule({
  declarations: [
    DataCommunicationComponent,
    FormatCurrencyDirective,
    MaterialInputComponent
    ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    DataCommunicationRoutingModule,
    MatRadioModule,
    MatGridListModule
  ],
  exports: [FormatCurrencyDirective]
})
export class DataCommunicationModule {
}
