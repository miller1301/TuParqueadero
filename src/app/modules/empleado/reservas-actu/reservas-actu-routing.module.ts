import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservasActuPage } from './reservas-actu.page';

const routes: Routes = [
  {
    path: '',
    component: ReservasActuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservasActuPageRoutingModule {}
