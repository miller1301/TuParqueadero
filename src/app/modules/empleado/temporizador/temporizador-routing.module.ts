import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemporizadorPage } from './temporizador.page';

const routes: Routes = [
  {
    path: '',
    component: TemporizadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemporizadorPageRoutingModule {}
