import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPage } from './user.page';

const routes: Routes = [
  {
    path: '',
    component: UserPage
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },  {
    path: 'reserv-map',
    loadChildren: () => import('./reserv-map/reserv-map.module').then( m => m.ReservMapPageModule)
  },
  {
    path: 'inscripcion',
    loadChildren: () => import('./inscripcion/inscripcion.module').then( m => m.InscripcionPageModule)
  },
  {
    path: 'insc2',
    loadChildren: () => import('./insc2/insc2.module').then( m => m.Insc2PageModule)
  },
  {
    path: 'rservas',
    loadChildren: () => import('./rservas/rservas.module').then( m => m.RservasPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
