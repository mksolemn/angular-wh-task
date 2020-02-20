import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GuardedRouteComponent} from './guarded-route.component';

const routes: Routes = [
  { path: '', component: GuardedRouteComponent },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuardedRouteRoutingModule { }
