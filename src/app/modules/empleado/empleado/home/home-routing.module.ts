import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'agre-info-auto',
    loadChildren: () => import('../../agre-info-auto/agre-info-auto.module').then( m => m.AgreInfoAutoPageModule)
  },
  {
    path: 'contador',
    loadChildren: () => import('../../contador/contador.module').then( m => m.ContadorPageModule)
  },
  {
    path: 'cupos',
    loadChildren: () => import('../../cupos/cupos.module').then( m => m.CuposPageModule)
  },
  {
    path: 'R_local',
    loadChildren: () => import('../../cupos/r-local/r-local.module').then( m => m.RLocalPageModule)
  },
  {
    path: 'inf-auto',
    loadChildren: () => import('../../inf-auto/inf-auto.module').then( m => m.InfAutoPageModule)
  }, 
  {
    path: 'info-lista',
    loadChildren: () => import('../../info-lista/info-lista.module').then( m => m.InfoListaPageModule)
  },
  {
    path: 'novedad',
    loadChildren: () => import('../../novedad/novedad.module').then( m => m.NovedadPageModule)
  },
  {
    path: 'reservas',
    loadChildren: () => import('../../reservas/reservas.module').then( m => m.ReservasPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('../../perfil/perfil.module').then( m => m.PerfilPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeComponentRoutingModule {}
