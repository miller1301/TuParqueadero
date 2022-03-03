import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParqueaderosPage } from './parqueaderos.page';

const routes: Routes = [
  {
    path: '',
    component: ParqueaderosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParqueaderosPageRoutingModule {}
