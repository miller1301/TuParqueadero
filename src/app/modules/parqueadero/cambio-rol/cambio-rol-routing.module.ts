import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambioRolPage } from './cambio-rol.page';

const routes: Routes = [
  {
    path: '',
    component: CambioRolPage
  },
  
  {
    path: 'cambio',
    loadChildren: () => import('./cambio/cambio.module').then( m => m.CambioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambioRolPageRoutingModule {}
