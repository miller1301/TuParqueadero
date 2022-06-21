import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParqueaderoPage } from './parqueadero.page';

const routes: Routes = [
  {
    path: '',
    component: ParqueaderoPage,
  },
  {
    path: 'par-home',
    loadChildren: () => import('./par-home/par-home.module').then( m => m.ParHomePageModule)
  },
  {
    path: 'crud',
    loadChildren: () => import('./crud/crud.module').then( m => m.CrudPageModule)
  },
  
  {
    path: 'configuracion',
    loadChildren: () => import('./configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'reservas',
    loadChildren: () => import('./reservas/reservas.module').then( m => m.ReservasPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },



  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParqueaderoPageRoutingModule {}