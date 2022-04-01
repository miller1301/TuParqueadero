import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-cupos',
  // incluye html
  templateUrl: './cupos.page.html',
  // llama estilos del css
  styleUrls: ['./cupos.page.scss'],
})
export class CuposPage implements OnInit {

  constructor(private log:AuthService) { }

  ngOnInit() {
  }

  // Iniciar sesion-Cerrar sesion
  logout(){
    console.log("logout")
    this.log.logout()
  }

}
