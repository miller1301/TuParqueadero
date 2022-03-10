import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserPage } from './modules/user/user.page';

// Protección de rutas
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
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
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then( m => m.AdminPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'user',
    component: UserPage,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
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
  },
  {
    path: 'buscaar',
    loadChildren: () => import('./modules/user/home/buscar/buscar.module').then( m => m.BuscarPageModule)
  },
  {
    path: 'parqueade',
    loadChildren: () => import('./modules/user/home/parque/parque.module').then( m => m.ParquePageModule)
  },





  {
    path: 'verificacion-email',
    loadChildren: () => import('./shared/send-email/send-email.module').then( m => m.SendEmailPageModule)
  },
  {
    path: 'recuperar-contrasena',
    loadChildren: () => import('./shared/recuperar-contrasena/recuperar-contrasena.module').then( m => m.RecuperarContrasenaPageModule)
  },
  {
    path: 'empleado',
    loadChildren: () => import('./modules/empleado/empleado/home/home.module').then( m => m.HomeComponentModule)
  },
  {
    path: 'cupos',
    loadChildren: () => import('./modules/empleado/cupos/cupos.module').then( m => m.CuposPageModule)
  },
  {
    path: 'par-home',
    loadChildren: () => import('./modules/parqueadero/par-home/par-home.module').then( m => m.ParHomePageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
