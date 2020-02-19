import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './wallet-hub-tasks/auth.guard';

const routes: Routes = [
  {
    path: 'task',
    children: [
      {
        path: 'guardedRoute',
        canActivate: [AuthGuard],
        data: {state: 'guardedRoute'},
        loadChildren: () => import('./wallet-hub-tasks/guarded-route/guarded-route.module')
          .then(m => m.GuardedRouteModule)
      },
      {
        path: 'dataCommunication',
        data: {state: 'cssTransition'},
        loadChildren: () => import('./wallet-hub-tasks/data-communication/data-communication.module')
          .then(m => m.DataCommunicationModule)
      }
    ],
  },
  {
    path: 'design-slice',
    loadChildren: () => import('./wallet-hub-tasks/slice-design-test/slice-design-test.module')
      .then(m => m.SliceDesignTestModule)
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
