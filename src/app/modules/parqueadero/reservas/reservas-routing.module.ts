import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservasPage } from './reservas.page';

const routes: Routes = [
  {
    path: '',
    component: ReservasPage
  },
  {
    path: 'info-reservas',
    loadChildren: () => import('./info-reservas/info-reservas.module').then( m => m.InfoReservasPageModule)
  },
  {
    path: 'inforeserva',
    loadChildren: () => import('./inforeserva/inforeserva.module').then( m => m.InforeservaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservasPageRoutingModule {}
