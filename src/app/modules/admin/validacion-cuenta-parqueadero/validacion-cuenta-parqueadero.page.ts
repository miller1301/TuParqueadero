import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-validacion-cuenta-parqueadero',
  templateUrl: './validacion-cuenta-parqueadero.page.html',
  styleUrls: ['./validacion-cuenta-parqueadero.page.scss'],
})
export class ValidacionCuentaParqueaderoPage implements OnInit {

  constructor(private log : AuthService, private menuAdmin: MenuService) { }

  ngOnInit() {
  }
  
  logout(){
    this.log.logout()
  }

  menu(){
    this.menuAdmin.presentActionSheet();
  }
}
