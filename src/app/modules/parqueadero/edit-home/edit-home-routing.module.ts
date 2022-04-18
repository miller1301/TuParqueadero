import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditHomePage } from './edit-home.page';

const routes: Routes = [
  {
    path: '',
    component: EditHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditHomePageRoutingModule {}
