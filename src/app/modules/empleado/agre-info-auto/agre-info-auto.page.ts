import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/modelos/r-local';
import { FirestoreService } from 'src/app/services/firestore.service';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';



@Component({
  // como se va a llamar el componente
  selector: 'app-agre-info-auto',
  // incluye el html 5 
  templateUrl: './agre-info-auto.page.html',
  // incluye estilos en css
  styleUrls: ['./agre-info-auto.page.scss'],
})
export class AgreInfoAutoPage implements OnInit {
  ReservasL:Reserva[]=[];

  id:string;
  datos:Reserva={
  uid: '6R6SbxeS01fDCxTyD9KK6Fk9aNX2',
   Hora_de_ingreso: null,
   Placa: null,
   Modelo: null,
   Marca: null,
   Nombre: null,
   telefono: null,
   Correo: null,
   img: 'https://www.marcali.com/wp-content/uploads/2020/07/carros-que-consumen-menos-gasolina-1280x720.jpg',
   novedad: null
  }
  constructor(private firestore:FirestoreService) {

    
   }

  ngOnInit() {
  }

  C_reserva( ){
    this.firestore.createDocIdDefault('ReservasL',this.datos).then(res=>{
      console.log(res);
    }) .catch(err=>{
      console.log("error",err)
    });
    
 
  }

  // Modal del Boton 
  showModal(){
    Swal.fire({
      title: 'Muy bien!!',
      text: 'Su reserva esta registrada',
      icon: 'success'
      
    })
  }

}
