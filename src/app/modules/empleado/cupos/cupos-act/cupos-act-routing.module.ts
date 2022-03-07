import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuposActPage } from './cupos-act.page';

const routes: Routes = [
  {
    path: '',
    component: CuposActPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuposActPageRoutingModule {}
