import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuposPage } from './cupos.page';

const routes: Routes = [
  {
    path: '',
    component: CuposPage
  },
  {
    path: 'r-local',
    loadChildren: () => import('./r-local/r-local.module').then( m => m.RLocalPageModule)
  },
  {
    path: 'cupos-act',
    loadChildren: () => import('./cupos-act/cupos-act.module').then( m => m.CuposActPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuposPageRoutingModule {}
