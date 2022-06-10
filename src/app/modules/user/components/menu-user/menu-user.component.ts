import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.scss'],
})
export class MenuUserComponent implements OnInit {

  dataUser: any;

  constructor( private menuController: MenuController, private auth: AuthService, private router: Router ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    let user = localStorage.getItem('user');
    this.dataUser = JSON.parse(user);
    console.log(this.dataUser);
  }

  // * Funcion que consume el servicio de Autenticacion y le permite al usuario cerrar la sesion
  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

}
