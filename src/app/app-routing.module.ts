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
    path: 'crud',
    loadChildren: () => import('./modules/parqueadero/crud/crud.module').then(m => m.CrudPageModule)
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
    path: 'reserv-par',
    loadChildren: () => import('./modules/user/home/parque/reser-user/reser-user.module').then( m => m.ReserUserPageModule)
  },
  {
    path: 'map2',
    loadChildren: () => import('./modules/user/reserv-map/reserv-map.module').then( m => m.ReservMapPageModule)
  },
  {
    path: 'reservado',
    loadChildren: () => import('./modules/user/reserv-map/relog/relog.module').then( m => m.RelogPageModule)
  },
  {
    path: 'pagos',
    loadChildren: () => import('./modules/user/reserv-map/relog/pagos/pagos.module').then( m => m.PagosPageModule)
  },
  {
    path: 'inscrip',
    loadChildren: () => import('./modules/user/inscripcion/inscripcion.module').then( m => m.InscripcionPageModule)
  },
  {
    path: 'inscrip2',
    loadChildren: () => import('./modules/user/insc2/insc2.module').then( m => m.Insc2PageModule)
  },
  {
    path: 'reserus',
    loadChildren: () => import('./modules/user/rservas/rservas.module').then( m => m.RservasPageModule)
  },
  {
    path: 'reserus2',
    loadChildren: () => import('./modules/user/rservas/rservas2/rservas2.module').then( m => m.Rservas2PageModule)
  },
  {
    path: 'reserus3',
    loadChildren: () => import('./modules/user/rservas/rservas2//rserva3/rserva3.module').then( m => m.Rserva3PageModule)
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
