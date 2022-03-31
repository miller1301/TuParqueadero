import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoListaPage } from './info-lista.page';

const routes: Routes = [
  {
    path: '',
    component: InfoListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoListaPageRoutingModule {}
