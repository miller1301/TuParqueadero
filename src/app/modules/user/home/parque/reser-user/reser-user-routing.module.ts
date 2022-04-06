import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReserUserPage } from './reser-user.page';

const routes: Routes = [
  {
    path: '',
    component: ReserUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReserUserPageRoutingModule {}
