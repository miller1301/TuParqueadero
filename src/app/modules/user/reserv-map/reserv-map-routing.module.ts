import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservMapPage } from './reserv-map.page';

const routes: Routes = [
  {
    path: '',
    component: ReservMapPage
  },
  {
    path: 'relog',
    loadChildren: () => import('./relog/relog.module').then( m => m.RelogPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservMapPageRoutingModule {}
