import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfAutoPage } from './inf-auto.page';

const routes: Routes = [
  {
    path: '',
    component: InfAutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfAutoPageRoutingModule {}
