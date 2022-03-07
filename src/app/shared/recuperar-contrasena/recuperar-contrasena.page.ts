import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage{
  
  emailU: string = '';

  constructor(private auth: AuthService, private router:Router) { }

    async Reset(){
      const email = this.emailU
      await this.auth.Recuperar(email);
      alert('Email de recuperacion enviado');
      this.router.navigate(['/login'])
      this.emailU = '';
    }

}
