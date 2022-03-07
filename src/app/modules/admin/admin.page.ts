import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private log:AuthService, private router:Router, private auth: AngularFireAuth) { }

  ngOnInit() {
  }

  logout(){
    this.log.logout()
  }

  // redireccion1(){
  //   this.router.navigate(['/home'])
  // }

  // redireccion2(){
  //   this.router.navigate(['/home/parqueaderos'])
  // }
}
