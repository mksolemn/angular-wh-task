import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataCommunicationComponent } from './data-communication.component';
import {MatFormFieldModule, MatRadioModule} from '@angular/material';
import {DataCommunicationRoutingModule} from './data-communication-routing.module';


@NgModule({
  declarations: [DataCommunicationComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    DataCommunicationRoutingModule,
    MatRadioModule
  ]
})
export class DataCommunicationModule { }
