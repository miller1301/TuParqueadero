import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor( private actionSheetController : ActionSheetController, private router:Router,private auth: AuthService) { }

  menu(){
    this.presentActionSheet();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Menu',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Bandeja de entrada',
        icon: 'mail-unread-outline',
        data: {
          type: 'delete'
        },
        handler: () => {
          this.router.navigate(['/admin'])
        }
      }, {
        text: 'Parqueaderos',
        icon: 'reader-outline',
        handler: () => {
          this.router.navigate(['/admin/parqueaderos'])
        }
      }, {
        text: 'Configuracion',
        icon: 'settings-outline',
        handler: () => {
          this.router.navigate(['/admin/configuracion-cuenta'])
        }
      }, {
        text: 'Cerrar Sesión',
        icon: 'log-out-outline',
        handler: () => {
          this.auth.logout()
        }
      }]
    });
    await actionSheet.present();
  }
}
