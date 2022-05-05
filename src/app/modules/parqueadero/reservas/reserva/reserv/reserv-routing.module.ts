import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservPage } from './reserv.page';

const routes: Routes = [
  {
    path: '',
    component: ReservPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservPageRoutingModule {}