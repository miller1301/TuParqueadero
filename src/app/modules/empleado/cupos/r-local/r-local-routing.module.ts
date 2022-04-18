import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RLocalPage } from './r-local.page';

const routes: Routes = [
  {
    path: '',
    component: RLocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RLocalPageRoutingModule {}
