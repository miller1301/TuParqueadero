import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rserva3Page } from './rserva3.page';

const routes: Routes = [
  {
    path: '',
    component: Rserva3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rserva3PageRoutingModule {}
