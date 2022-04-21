import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {AuthService} from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private log:AuthService, private menu: MenuController,private firestore:FirestoreService){ }

  UidG;
  dataUser;

  ngOnInit() {
     // ! Metodo que guarda el ID del usuario actual para luego hacer una busqueda en la base de datos y traer su informacion esperamos su respuesta "res" y se la asignamos a la propiedad UidG
     this.log.getUid().then( res => {
      // * Esperamos la respuesta y se la asignamos a la propiedad UidG 
      this.UidG = res
      // * Realizamos una consulta a la base de datos para obtener la informacion del usuario actual, esta consulta tiene dos parametros el path el cual nos indica de donde sacaremos la informacion y el segundo parametro es el id el cual nos indica de quien sacaremos la informacion 
      this.firestore.getDoc('Usuarios', this.UidG ).subscribe(res => {
      // * Esperamos la respuesta y se la asignamos a la propiedad dataUser la cual sera usada para mostrar la informacion del usuario en el menu  
      this.dataUser = res 
      console.log(this.dataUser)
      });
      });
  }

  logout(){
    console.log("logout")
    this.log.logout()
  }

  abrir(){
    // * Constante que obtiene el elemento por el id "open" para luego asignarle un evento
    const abrirM = document.getElementById('open');
    // * Se le asigna un evento click al elemento que obtuvimos anteriormente el cual ejecutara una funcion
    abrirM.addEventListener('click', function(){
    // * La funcion a ejecutar es la siguiente
    // ! Se obtiene el elemento por id "animacion" y se le agrega una clase mediante un metodo llamado toggle el cual agrega la clase si esta no es parte del elemento o remueve la clase si esta ya forma parte de el
    // * La clase "active" mostrara el menu 
    document.getElementById('animacion').classList.toggle('active');
    // * La clase "animated__bounceInLeft" hara una animacion en el menu cuando este se muestre
    document.getElementById('animacion').classList.toggle('animate__bounceInLeft');

    });
  }

}
