import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-configuracion-cuenta',
  templateUrl: './configuracion-cuenta.page.html',
  styleUrls: ['./configuracion-cuenta.page.scss'],
})
export class ConfiguracionCuentaPage implements OnInit {

  constructor(private log : AuthService) { }

  ngOnInit() {
  }
  logout(){
    this.log.logout()
  }

}
