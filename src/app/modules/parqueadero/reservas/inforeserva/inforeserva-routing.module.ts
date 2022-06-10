import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InforeservaPage } from './inforeserva.page';

const routes: Routes = [
  {
    path: '',
    component: InforeservaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InforeservaPageRoutingModule {}
