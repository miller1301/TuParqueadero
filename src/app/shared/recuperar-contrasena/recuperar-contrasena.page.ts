import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage implements OnInit {
  
  emailU: string = '';

  constructor(private auth: AuthService, private router:Router, private alertController: AlertController) { }
  
  ngOnInit(): void {
  }

    async Reset(){
      const email = this.emailU
      await this.auth.Recuperar(email);
      this.presentAlert()
      this.emailU = '';
    }

    async presentAlert() {
      const alert = await this.alertController.create({
        backdropDismiss: false,
        cssClass: 'my-custom-class',
        header: 'Recuperacion de contraseña',
        message: `Hemos enviado un correo a ${ this.emailU } para la recuperacion de la contraseña`,
        buttons: [{
          text: 'Ok',
          handler: ()=>{
            console.log('redireccion Aqui!')
            this.router.navigate(['/login']);
          }
        }],
        
      });
  
      await alert.present();

    }

}
