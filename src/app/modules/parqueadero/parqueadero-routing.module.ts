import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParqueaderoPage } from './parqueadero.page';

const routes: Routes = [
  {
    path: '',
    component: ParqueaderoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParqueaderoPageRoutingModule {}
