import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoReservasPage } from './info-reservas.page';

const routes: Routes = [
  {
    path: '',
    component: InfoReservasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoReservasPageRoutingModule {}
