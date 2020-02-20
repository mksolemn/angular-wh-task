import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnChangesComponent } from './on-changes.component';
import {MatCardModule} from '@angular/material';


@NgModule({
  declarations: [OnChangesComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    OnChangesComponent
  ]
})
export class OnChangesModule { }
