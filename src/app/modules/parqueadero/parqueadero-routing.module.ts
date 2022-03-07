import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParqueaderoPage } from './parqueadero.page';

const routes: Routes = [
  {
    path: '',
    component: ParqueaderoPage
  },
  {
    path: 'edit-home',
    loadChildren: () => import('./edit-home/edit-home.module').then( m => m.EditHomePageModule)
  },
  {
    path: 'crear-empleado',
    loadChildren: () => import('./crear-empleado/crear-empleado.module').then( m => m.CrearEmpleadoPageModule)
  },
  {
    path: 'borrar-empleado',
    loadChildren: () => import('./borrar-empleado/borrar-empleado.module').then( m => m.BorrarEmpleadoPageModule)
  },
  {
    path: 'reservas',
    loadChildren: () => import('./reservas/reservas.module').then( m => m.ReservasPageModule)
  },
  {
    path: 'cambio-rol',
    loadChildren: () => import('./cambio-rol/cambio-rol.module').then( m => m.CambioRolPageModule)
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParqueaderoPageRoutingModule {}
