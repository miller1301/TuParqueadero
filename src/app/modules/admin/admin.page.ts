import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private log:AuthService, private router:Router, private auth: AngularFireAuth, private menuAdmin: MenuService) { }

  ngOnInit() {
  }

  logout(){
    this.log.logout()
  }

  menu(){
    this.menuAdmin.presentActionSheet();
  }
  // redireccion1(){
  //   this.router.navigate(['/home'])
  // }

  // redireccion2(){
  //   this.router.navigate(['/home/parqueaderos'])
  // }
}
