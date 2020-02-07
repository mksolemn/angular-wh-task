import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DataCommunicationComponent} from './data-communication.component';

const routes: Routes = [
  { path: '', component: DataCommunicationComponent },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataCommunicationRoutingModule { }
