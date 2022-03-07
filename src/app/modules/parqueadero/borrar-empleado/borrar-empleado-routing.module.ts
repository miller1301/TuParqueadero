import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BorrarEmpleadoPage } from './borrar-empleado.page';

const routes: Routes = [
  {
    path: '',
    component: BorrarEmpleadoPage
  },
  {
    path: 'borrar',
    loadChildren: () => import('./borrar/borrar.module').then( m => m.BorrarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BorrarEmpleadoPageRoutingModule {}
