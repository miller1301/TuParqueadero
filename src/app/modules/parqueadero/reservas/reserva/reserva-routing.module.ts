import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservaPage } from './reserva.page';

const routes: Routes = [
  {
    path: '',
    component: ReservaPage
  },
  {
    path: 'reserv',
    loadChildren: () => import('./reserv/reserv.module').then( m => m.ReservPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservaPageRoutingModule {}
