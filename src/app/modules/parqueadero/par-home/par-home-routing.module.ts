import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParHomePage } from './par-home.page';

const routes: Routes = [
  {
    path: '',
    component: ParHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParHomePageRoutingModule {}
