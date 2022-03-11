import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgreInfoAutoPage } from './agre-info-auto.page';

const routes: Routes = [
  {
    path: '',
    component: AgreInfoAutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgreInfoAutoPageRoutingModule {}
