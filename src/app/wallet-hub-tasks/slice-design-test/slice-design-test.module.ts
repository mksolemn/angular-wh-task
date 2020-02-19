import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SliceDesignTestComponent} from './slice-design-test.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [SliceDesignTestComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [SliceDesignTestComponent]
})
export class SliceDesignTestModule { }
