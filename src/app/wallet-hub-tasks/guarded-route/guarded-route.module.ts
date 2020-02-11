import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuardedRouteComponent } from './guarded-route.component';
import {GuardedRouteRoutingModule} from './guarded-route-routing.module';

@NgModule({
  declarations: [GuardedRouteComponent],
  imports: [
    CommonModule,
    GuardedRouteRoutingModule
  ]
})
export class GuardedRouteModule { }
