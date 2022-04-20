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
    loadChildren: () => import('./modules/parqueadero/edit-home/edit-home.module').then( m => m.EditHomePageModule)
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
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
