import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'parqueaderos',
    loadChildren: () => import('./parqueaderos/parqueaderos.module').then( m => m.ParqueaderosPageModule)
  },
  {
    path: 'configuracion-cuenta',
    loadChildren: () => import('./configuracion-cuenta/configuracion-cuenta.module').then( m => m.ConfiguracionCuentaPageModule)
  },
  {
    path: 'validacion-cuenta-parqueadero/:id',
    loadChildren: () => import('./validacion-cuenta-parqueadero/validacion-cuenta-parqueadero.module').then( m => m.ValidacionCuentaParqueaderoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
