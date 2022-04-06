import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovedadPage } from './novedad.page';

const routes: Routes = [
  {
    path: '',
    component: NovedadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovedadPageRoutingModule {}
