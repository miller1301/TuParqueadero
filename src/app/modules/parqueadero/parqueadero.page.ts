import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

import { ModalController } from '@ionic/angular';
import { ModalPage } from './modal/modal.page'
import { ParHomePage } from './par-home/par-home.page';

@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.page.html',
  styleUrls: ['./parqueadero.page.scss'],
})
export class ParqueaderoPage implements OnInit {

  listaParqueadero = [];

  constructor(
    // * Llamando al servicio que se utilizara para los metodos de Autenticion o manejo de la sesion del usuario
    private log: AuthService,
    // * Llamando al servicio que se utilizara para el manejo de los datos del usuario de la sesion actual
    private firestore: FirestoreService,

    public modalController: ModalController
  ) { }

  // ! Propiedad que guarda el ID del usuario actual para luego hacer una consulta en la base de datos y guardar esa informacion en la propiedad "dataUser"
  UidG;
  // ! Propiedad que guarda la informacion del usuario actual para mostrarla en el menu 
  dataUser;


  // ! Metodo del ciclo de vida de los componentes es lo primero que se ejecuta al entrar a nuestra vista
  ngOnInit() {

    this.firestore.getAll('Parqueaderos').then(parkres =>{
      parkres.subscribe(listaParqueaderoRef =>{
        
        this.listaParqueadero = listaParqueaderoRef.map(parkref=>{
          let Parqueaderos=parkref.payload.doc.data();
          Parqueaderos['id']=parkref.payload.doc.id;
          return Parqueaderos;
        });

      });
    });

    // ! Metodo que guarda el ID del usuario actual para luego hacer una busqueda en la base de datos y traer su informacion esperamos su respuesta "res" y se la asignamos a la propiedad UidG
    this.log.getUid().then(res => {
      // * Esperamos la respuesta y se la asignamos a la propiedad UidG 
      this.UidG = res
      // * Realizamos una consulta a la base de datos para obtener la informacion del usuario actual, esta consulta tiene dos parametros el path el cual nos indica de donde sacaremos la informacion y el segundo parametro es el id el cual nos indica de quien sacaremos la informacion 
      this.firestore.getDoc('Usuarios', this.UidG).subscribe(res => {
        // * Esperamos la respuesta y se la asignamos a la propiedad dataUser la cual sera usada para mostrar la informacion del usuario en el menu  
        this.dataUser = res
      });
    });
  }


  // * Funcion que consume el servicio de Autenticacion y le permite al usuario cerrar la sesion
  logout() {
    this.log.logout()
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async openPar() {
    const modal = await this.modalController.create({
      component: ParHomePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();

  }
}
