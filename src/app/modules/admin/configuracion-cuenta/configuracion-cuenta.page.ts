import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-configuracion-cuenta',
  templateUrl: './configuracion-cuenta.page.html',
  styleUrls: ['./configuracion-cuenta.page.scss'],
})
export class ConfiguracionCuentaPage implements OnInit {

  constructor(private log : AuthService, private menuAdmin: MenuService) { }

  ngOnInit() {
  }
  logout(){
    this.log.logout()
  }

  menu(){
    this.menuAdmin.presentActionSheet()
  }
}
