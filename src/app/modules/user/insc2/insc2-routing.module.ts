import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Insc2Page } from './insc2.page';

const routes: Routes = [
  {
    path: '',
    component: Insc2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Insc2PageRoutingModule {}
