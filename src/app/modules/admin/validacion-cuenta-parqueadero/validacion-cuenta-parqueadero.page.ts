import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-validacion-cuenta-parqueadero',
  templateUrl: './validacion-cuenta-parqueadero.page.html',
  styleUrls: ['./validacion-cuenta-parqueadero.page.scss'],
})
export class ValidacionCuentaParqueaderoPage implements OnInit {

  constructor(private log : AuthService) { }

  ngOnInit() {
  }
  
  logout(){
    this.log.logout()
  }

}
