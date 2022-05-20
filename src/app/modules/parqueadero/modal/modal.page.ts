import { Component, OnInit } from '@angular/core';

import { FirestoreService } from 'src/app/services/firestore.service';
import { Parqueadero } from 'src/app/modelos/parqueaderos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  parqueaderos: Parqueadero = {
    nameParqueadero: null,
    telefono: null,
    direccion: null,
    uid: null,
    horario: null,
    userid: 'JO9qMOKsMVbBqhrJ7qGsdesfA5V2',
    tarifa: null,
    estado: 'No disponible',
    ubicacion: null, 
    img: 'https://bogota.gov.co/sites/default/files/styles/1050px/public/2022-01/parqueadero1.jpg'
  }
  constructor( 
    private router:Router,
    // * Llamando al servicio que se utilizara para el manejo de los datos del usuario de la sesion actual
    private firestore: FirestoreService) { }

  ngOnInit() {
  }

  
  rParquedero( ){
    this.firestore.createDocIdDefault('Parqueaderos',this.parqueaderos).then(res=>{
      console.log(res);
    }) .catch(err=>{
      console.log("error",err)
    });

  }

  }



