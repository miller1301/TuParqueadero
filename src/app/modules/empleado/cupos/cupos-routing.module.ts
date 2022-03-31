import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuposPage } from './cupos.page';

// Rutas de pagina
const routes: Routes = [
  // Ruta cupos
  {
    path: '',
    component: CuposPage
  },
  // Ruta reserva loca
  {
    path: 'r-local',
    loadChildren: () => import('./r-local/r-local.module').then( m => m.RLocalPageModule)
  },
  // Ruta Cupos Actualizados
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
