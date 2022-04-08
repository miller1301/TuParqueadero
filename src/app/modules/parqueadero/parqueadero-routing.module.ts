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
    path: 'reservas',
    loadChildren: () => import('./reservas/reservas.module').then( m => m.ReservasPageModule)
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
    path: 'reserva',
    loadChildren: () => import('./reservas/reserva/reserva.module').then( m => m.ReservaPageModule)
  },
  {
    path: 'reserv',
    loadChildren: () => import('./reservas/reserva/reserv/reserv.module').then( m => m.ReservPageModule)
  }
  
  



  


  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParqueaderoPageRoutingModule {}
