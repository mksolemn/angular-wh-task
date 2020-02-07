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
        loadChildren: () => import('./wallet-hub-tasks/guarded-route/guarded-route.module')
          .then(m => m.GuardedRouteModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
