import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearEmpleadoPage } from './crear-empleado.page';

const routes: Routes = [
  {
    path: '',
    component: CrearEmpleadoPage
  },  {
    path: 'crud',
    loadChildren: () => import('./crud/crud.module').then( m => m.CrudPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearEmpleadoPageRoutingModule {}
