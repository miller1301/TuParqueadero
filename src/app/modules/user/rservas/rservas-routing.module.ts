import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RservasPage } from './rservas.page';

const routes: Routes = [
  {
    path: '',
    component: RservasPage
  },
  {
    path: 'rservas2',
    loadChildren: () => import('./rservas2/rservas2.module').then( m => m.Rservas2PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RservasPageRoutingModule {}
