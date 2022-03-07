import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cambio-de-rol',
  templateUrl: './cambio-de-rol.page.html',
  styleUrls: ['./cambio-de-rol.page.scss'],
})
export class CambioDeRolPage implements OnInit {

  constructor(private log : AuthService) { }

  ngOnInit() {
  }
  logout(){
    this.log.logout()
  }
}
