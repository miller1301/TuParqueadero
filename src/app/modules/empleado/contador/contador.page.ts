import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.page.html',
  styleUrls: ['./contador.page.scss'],
})
export class ContadorPage implements OnInit {

  constructor() { }

  numero:number = 15;


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

}
