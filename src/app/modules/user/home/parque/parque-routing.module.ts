import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParquePage } from './parque.page';

const routes: Routes = [
  {
    path: '',
    component: ParquePage
  },
  {
    path: 'reser-user',
    loadChildren: () => import('./reser-user/reser-user.module').then( m => m.ReserUserPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParquePageRoutingModule {}
