import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SliceDesignTestComponent} from './slice-design-test.component';

const routes: Routes = [
  {path: '', component: SliceDesignTestComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SliceDesignTestRoutingModule {
}
