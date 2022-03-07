import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-parqueaderos',
  templateUrl: './parqueaderos.page.html',
  styleUrls: ['./parqueaderos.page.scss'],
})
export class ParqueaderosPage implements OnInit {

  constructor(private auth:AuthService ,private router:Router, private menuAdmin: MenuService) { }

  ngOnInit() {
  }

  // redireccion1(){
  //   this.router.navigate(['/home'])
  // }

  // redireccion2(){
  //   this.router.navigate(['/home/parqueaderos'])
  // }
  logout() {
    this.auth.logout();
  }

  menu(){
    this.menuAdmin.presentActionSheet();
  }
}
