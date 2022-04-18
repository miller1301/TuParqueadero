import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cupos-act',
  templateUrl: './cupos-act.page.html',
  styleUrls: ['./cupos-act.page.scss'],
})
export class CuposActPage implements OnInit {

  constructor() { }

  numero:number = 10;


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
