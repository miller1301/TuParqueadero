import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-cambio-de-rol',
  templateUrl: './cambio-de-rol.page.html',
  styleUrls: ['./cambio-de-rol.page.scss'],
})
export class CambioDeRolPage implements OnInit {

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
