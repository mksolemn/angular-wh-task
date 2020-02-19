import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SliceDesignTestComponent} from './slice-design-test.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SliceDesignTestRoutingModule} from './slice-design-test-routing.module';

@NgModule({
  declarations: [SliceDesignTestComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SliceDesignTestRoutingModule
  ],
  exports: [SliceDesignTestComponent]
})
export class SliceDesignTestModule { }
