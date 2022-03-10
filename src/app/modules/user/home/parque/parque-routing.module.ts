import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParquePage } from './parque.page';

const routes: Routes = [
  {
    path: '',
    component: ParquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParquePageRoutingModule {}
