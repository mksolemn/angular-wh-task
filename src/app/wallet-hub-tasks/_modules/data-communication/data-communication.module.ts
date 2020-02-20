import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataCommunicationComponent} from './data-communication.component';
import {MatFormFieldModule, MatGridListModule, MatRadioModule} from '@angular/material';
import {DataCommunicationRoutingModule} from './data-communication-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialInputModule} from './material-input/material-input.module';


@NgModule({
  declarations: [
    DataCommunicationComponent
    ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    DataCommunicationRoutingModule,
    MatRadioModule,
    MatGridListModule,
    MaterialInputModule
  ],
  exports: []
})
export class DataCommunicationModule {
}
