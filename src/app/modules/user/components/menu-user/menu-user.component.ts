import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.scss'],
})
export class MenuUserComponent implements OnInit {

  constructor( private menuController: MenuController, private auth: AuthService ) { }

  ngOnInit() {}

  openMenu() {
    this.menuController.open();
  }

  // * Funcion que consume el servicio de Autenticacion y le permite al usuario cerrar la sesion
  logout() {
    this.auth.logout();
  }

}
