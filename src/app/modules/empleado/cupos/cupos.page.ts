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

  numero:number = 0;


  /***Funcion Sumar y Restar */
  sumar(){
    this.numero +=1;
  }

  restar(){
    this.numero -=1;
  }
/**fin  */


  //espera un numero como respuesta
  accionOperacion( valor:number ){
    this.numero +=valor;
  }
  

  ngOnInit(): void {
  }


  // Iniciar sesion-Cerrar sesion
  logout(){
    console.log("logout")
    this.log.logout()
  }

}
