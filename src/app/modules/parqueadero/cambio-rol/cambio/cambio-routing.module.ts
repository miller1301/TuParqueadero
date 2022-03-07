import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambioPage } from './cambio.page';

const routes: Routes = [
  {
    path: '',
    component: CambioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambioPageRoutingModule {}
