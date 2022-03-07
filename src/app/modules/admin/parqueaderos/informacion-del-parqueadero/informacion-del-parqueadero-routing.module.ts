import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacionDelParqueaderoPage } from './informacion-del-parqueadero.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionDelParqueaderoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionDelParqueaderoPageRoutingModule {}
