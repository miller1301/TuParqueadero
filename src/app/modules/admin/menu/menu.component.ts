import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private log:AuthService, private router:Router) { }

  ngOnInit() {
  }

  logout(){
    console.log("Logout")
    this.log.logout()
  }

  redireccion1(){
    this.router.navigate(['/home'])
  }

  redireccion2(){
    this.router.navigate(['/home/parqueaderos'])
  }

}

