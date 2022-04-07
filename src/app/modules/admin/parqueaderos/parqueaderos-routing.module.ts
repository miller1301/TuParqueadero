import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParqueaderosPage } from './parqueaderos.page';

const routes: Routes = [
  {
    path: '',
    component: ParqueaderosPage
  },
  {
    path: 'informacion-del-parqueadero/:id',
    loadChildren: () => import('./informacion-del-parqueadero/informacion-del-parqueadero.module').then( m => m.InformacionDelParqueaderoPageModule)
  },
  {
    path: 'informacion-usuario/:id',
    loadChildren: () => import('./informacion-usuario/informacion-usuario.module').then( m => m.InformacionUsuarioPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParqueaderosPageRoutingModule {}
