import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelogPage } from './relog.page';

const routes: Routes = [
  {
    path: '',
    component: RelogPage
  },
  {
    path: 'pagos',
    loadChildren: () => import('./pagos/pagos.module').then( m => m.PagosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelogPageRoutingModule {}
