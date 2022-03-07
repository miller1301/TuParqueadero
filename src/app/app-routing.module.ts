import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./shared/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./shared/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'parqueadero',
    loadChildren: () => import('./modules/parqueadero/parqueadero.module').then( m => m.ParqueaderoPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./modules/parqueadero/edit-home/edit-home.module').then(m => m.EditHomePageModule)
  },
  {
    path: 'Cr_empleado',
    loadChildren: () => import('./modules/parqueadero/crear-empleado/crear-empleado.module').then(m => m.CrearEmpleadoPageModule)
  },
  {
    path: 'B_empleado',
    loadChildren: () => import('./modules/parqueadero/borrar-empleado/borrar-empleado.module').then(m => m.BorrarEmpleadoPageModule)
  },
  {
    path: 'BB_empleado',
    loadChildren: () => import('./modules/parqueadero/borrar-empleado/borrar/borrar.module').then(m => m.BorrarPageModule)
  },
  {
    path: 'reservas',
    loadChildren: () => import('./modules/parqueadero/reservas/reservas.module').then(m => m.ReservasPageModule)
  }
  ,
  {
    path: 'reserva',
    loadChildren: () => import('./modules/parqueadero/reservas/reserva/reserva.module').then(m => m.ReservaPageModule)
  },
  {
    path: 'reserv',
    loadChildren: () => import('./modules/parqueadero/reservas/reserva/reserv/reserv.module').then(m => m.ReservPageModule)
  },
  {
    path: 'C_rol',
    loadChildren: () => import('./modules/parqueadero/cambio-rol/cambio-rol.module').then(m => m.CambioRolPageModule)
  },
  {
    path: 'cambio',
    loadChildren: () => import('./modules/parqueadero/cambio-rol/cambio/cambio.module').then( m => m.CambioPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then( m => m.UserPageModule)
  }
  ,
  {
    path: 'home2',
    loadChildren: () => import('./modules/user/home/home.module').then( m => m.HomePageModule)
  }






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
