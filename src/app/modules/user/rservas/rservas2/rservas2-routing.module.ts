import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rservas2Page } from './rservas2.page';

const routes: Routes = [
  {
    path: '',
    component: Rservas2Page
  },
  {
    path: 'rserva3',
    loadChildren: () => import('./rserva3/rserva3.module').then( m => m.Rserva3PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rservas2PageRoutingModule {}
