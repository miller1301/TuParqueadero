import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReciboPage } from './recibo.page';

const routes: Routes = [
  {
    path: '',
    component: ReciboPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReciboPageRoutingModule {}
