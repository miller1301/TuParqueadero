import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuposPage } from './cupos.page';

const routes: Routes = [
  {
    path: '',
    component: CuposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuposPageRoutingModule {}
