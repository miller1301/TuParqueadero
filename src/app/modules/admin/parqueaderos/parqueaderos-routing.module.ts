import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParqueaderosPage } from './parqueaderos.page';

const routes: Routes = [
  {
    path: '',
    component: ParqueaderosPage
  },  {
    path: 'informacion-del-parqueadero',
    loadChildren: () => import('./informacion-del-parqueadero/informacion-del-parqueadero.module').then( m => m.InformacionDelParqueaderoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParqueaderosPageRoutingModule {}
