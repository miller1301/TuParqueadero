import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BorrarPage } from './borrar.page';

const routes: Routes = [
  {
    path: '',
    component: BorrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BorrarPageRoutingModule {}
