import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservasGPage } from './reservas-g.page';

const routes: Routes = [
  {
    path: '',
    component: ReservasGPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservasGPageRoutingModule {}
