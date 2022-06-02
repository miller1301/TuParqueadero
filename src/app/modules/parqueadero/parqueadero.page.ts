import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';
import { ParHomePage } from './par-home/par-home.page';

@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.page.html',
  styleUrls: ['./parqueadero.page.scss'],
})
export class ParqueaderoPage implements OnInit {


  // !Arreglo al cual se le pasaran los datos traidos de la base de datos para luego ser consumido por el For 
  listarData: any[] = []

  constructor (
    // * Llamando al servicio que se utilizara para los metodos de Autenticion o manejo de la sesion del usuario
    private log:AuthService,
    // * LLamando al servicio que se utilizara para el manejo de los datos del parqueadero
    private datos:FirestoreService,
    // * Llamando al servicio que se utilizara para el manejo de los datos del usuario de la sesion actual
    private firestore: FirestoreService,

    private modalController: ModalController
  ) { }

  // ! Propiedad que guarda el ID del usuario actual para luego hacer una consulta en la base de datos y guardar esa informacion en la propiedad "dataUser"
  UidG;
  // ! Propiedad que guarda la informacion del usuario actual para mostrarla en el menu 
  dataUser;


  arreglo;
  arreglos2;
  usuario;

  // ! Metodo que muestra o oculta el menu del usuario
  abrir(){
    const abrirM = ()=>{
    // * La funcion a ejecutar es la siguiente
    // ! Se obtiene el elemento por id "animacion" y se le agrega una clase mediante un metodo llamado toggle el cual agrega la clase si esta no es parte del elemento o remueve la clase si esta ya forma parte de el
    // * La clase "active" mostrara el menu 
    document.getElementById('animacion').classList.toggle('active');
    // * La clase "animated__bounceInLeft" hara una animacion en el menu cuando este se muestre
    document.getElementById('animacion').classList.toggle('animate__bounceInLeft');
    }
    abrirM();
  }

  cerrar(){
    document.getElementById('animacion').classList.remove('active');
  }
  fecha;
  // ! Metodo del ciclo de vida de los componentes es lo primero que se ejecuta al entrar a nuestra vista
  ngOnInit() {
    const fecha = new Date()
    this.fecha = fecha.getFullYear(); 
    // ! Metodo que se ejecuta para traer los datos de los parqueaderos luego esperamos su respuesta "res" y se la asignamos a la propiedad "listarData" para luego ser consumida en la vista
    // this.datos.getDoc('Parqueaderos').subscribe(res => {
    // // * Le asignamos la respuesta a nuestra propiedad "listarData" para luego ser consumida
    // this.listarData = res
    // // * Usamos el consol.log en desarrollo para mirar si la respueta que nos llego fue la indicada
    // // !console.log( this.listarData)
    // });
    // ! Metodo que guarda el ID del usuario actual para luego hacer una busqueda en la base de datos y traer su informacion esperamos su respuesta "res" y se la asignamos a la propiedad UidG
    this.log.getUid().then( res => {
    // * Esperamos la respuesta y se la asignamos a la propiedad UidG 
    this.UidG = res
    // * Realizamos una consulta a la base de datos para obtener la informacion del usuario actual, esta consulta tiene dos parametros el path el cual nos indica de donde sacaremos la informacion y el segundo parametro es el id el cual nos indica de quien sacaremos la informacion 
    this.firestore.getDoc('Usuarios', this.UidG ).subscribe(res => {
    // * Esperamos la respuesta y se la asignamos a la propiedad dataUser la cual sera usada para mostrar la informacion del usuario en el menu  
    this.dataUser = res

    });

    this.firestore.getAllDocs('Parqueaderos').subscribe( (res: any) =>{
      this.arreglo = [];
      res.forEach( (parqueadero:any) => {
        this.arreglo.push({
          IdParqueadero: parqueadero.payload.doc.id,
          data : parqueadero.payload.doc.data()
        })
      });
      this.arreglos2 = this.arreglo.filter( (item)=>{ 
        if( item.data.estado === 'enRevision' ){
          return true 
        }
      })
      // console.log(this.arreglos2)
      
      
      
    })

    });
  }


  // * Funcion que consume el servicio de Autenticacion y le permite al usuario cerrar la sesion
  logout(){
    this.log.logout()
  }


  Modal
  async presentModal(index: number) {
    const modal = await this.modalController.create({
      component: ParHomePage,
      cssClass: 'my-custom-class',
      componentProps: {
        Parqueadero: this.arreglos2[index]
      }
    });
    return await modal.present();
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

 

}

