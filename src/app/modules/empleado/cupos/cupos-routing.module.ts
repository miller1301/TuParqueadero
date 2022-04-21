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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuposPageRoutingModule {}
