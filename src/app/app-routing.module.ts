import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/user/home/home.component';

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
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'parqueadero',
    loadChildren: () => import('./modules/parqueadero/parqueadero.module').then( m => m.ParqueaderoPageModule)
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
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
