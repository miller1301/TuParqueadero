import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidacionCuentaParqueaderoPage } from './validacion-cuenta-parqueadero.page';

const routes: Routes = [
  {
    path: '',
    component: ValidacionCuentaParqueaderoPage
  },
  {
    path: 'cambio-de-rol',
    loadChildren: () => import('../validacionCuentaParqueadero/cambio-de-rol/cambio-de-rol.module').then( m => m.CambioDeRolPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidacionCuentaParqueaderoPageRoutingModule {}
