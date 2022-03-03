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
    path: 'send-email',
    loadChildren: () => import('./shared/send-email/send-email.module').then( m => m.SendEmailPageModule)
  },  {
    path: 'recuperar-contrasena',
    loadChildren: () => import('./shared/recuperar-contrasena/recuperar-contrasena.module').then( m => m.RecuperarContrasenaPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
