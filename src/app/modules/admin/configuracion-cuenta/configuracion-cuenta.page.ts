import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-configuracion-cuenta',
  templateUrl: './configuracion-cuenta.page.html',
  styleUrls: ['./configuracion-cuenta.page.scss'],
})
export class ConfiguracionCuentaPage implements OnInit {

  constructor(
    // * Llamado al servicio que se utilizara para los metodos de Autenticion o manejo de la sesion del usuario
    private log : AuthService,
    // * Llamando al servicio que se utilizara para el manejo de los datos del usuario de la sesion actual
    private firebase:FirestoreService,
    // * Llamada al controlador de las Toast de Ionic para poder implementar este componente
    private toastController: ToastController,
    // * Llamada al controlador de las Alertas de Ionic para poder implementar este componente
    private alertController: AlertController
  ) { }

  // ! Propiedad que guarda el ID del usuario actual para luego hacer una consulta en la base de datos y guardar esa informacion en la propiedad "dataUser"
  UidG;
  // ! Propiedad que guarda la informacion del usuario actual para mostrarla en el menu 
  dataUser;
  // ! Metodo del ciclo de vida de los componentes es lo primero que se ejecuta al entrar a nuestra vista
  ngOnInit() {
    // ! Metodo que guarda el ID del usuario actual para luego hacer una busqueda en la base de datos y traer su informacion esperamos su respuesta "res" y se la asignamos a la propiedad UidG
    this.log.getUid().then(res => {
    // * Esperamos la respuesta y se la asignamos a la propiedad UidG 
    this.UidG = res
    // * Realizamos una consulta a la base de datos para obtener la informacion del usuario actual, esta consulta tiene dos parametros el path el cual nos indica de donde sacaremos la informacion y el segundo parametro es el id el cual nos indica de quien sacaremos la informacion 
    this.firebase.getDoc('Usuarios',this.UidG).subscribe(res =>{
    // * Esperamos la respuesta y se la asignamos a la propiedad dataUser la cual sera usada para mostrar la informacion del usuario en el menu  y en la vista de configuracion
    this.dataUser = res
    // * Usamos el consol.log en desarrollo para mirar si la respueta que nos llego fue la indicada
    // ! console.log(this.dataUser)
    });
    });
  }
  // ! Muestra un componente con informacion
  informacion(){
    this.presentToast()
  }
  // * Funcion que consume el servicio de Autenticacion y le permite al usuario cerrar la sesion
  logout(){
    this.log.logout()
  }
  // ! Metodo que muestra o oculta el menu del usuario
  abrir(){
    // * Constante que obtiene el elemento por el id "open6" para luego asignarle un evento
    const abrirM = ()=>{
    // ! Se obtiene el elemento por id "animacion6" y se le agrega una clase mediante un metodo llamado toggle el cual agrega la clase si esta no es parte del elemento o remueve la clase si esta ya forma parte de el
    // * La clase "active6" mostrara el menu 
     document.getElementById('animacion6').classList.toggle('active6');
    // * La clase "animated__bounceInLeft" hara una animacion en el menu cuando este se muestre
     document.getElementById('animacion6').classList.toggle('animate__bounceInLeft');
    }

    abrirM()
  }

    // ! Funcion para usar el componente Toast de Ionic 
    // ? Mas informacion para el uso de este: https://ionicframework.com/docs/api/toast
    async presentToast() {
    const toast = await this.toastController.create({
    message: 'Estos datos no son editables, únicamente son de tipo informativo.',
    duration: 4000
    });
    toast.present();
  }
  // ! Funcion para usar el componente Toast de Ionic 
  // ? Mas informacion para el uso de este: https://ionicframework.com/docs/api/toast
  async presentToastEdit() {
    const toast = await this.toastController.create({
    message: 'Datos actualizados correctamente.',
    duration: 4000
    });
    toast.present();
  }
  // ! Metodo que consume el componente Alert de ionic para actulizar los datos
  actualizar(){
    this.presentAlertPrompt();
  }
  // ! Componente Alert que muestra los campos para editar la informacion
  // ? Mas informacion para el uso del alert: https://ionicframework.com/docs/api/alert
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Editar informacion',
      inputs: [
        {
          name : 'icono',
          type: 'text',
          placeholder: 'Arrastra  o selecciona tu foto de perfil'
        },
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Ingresa tus nombres completos'
        },{
          name: 'telefono',
          type: 'text',
          placeholder: 'Ingresa tu numero de telefono'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Actualizar',
          handler: (e) => {
            console.log('Datos Actualizados');
            this.saveData(e.nombre, e.telefono, e.icono)
          }
        }
      ]
    });

    await alert.present();
  }

  // ! Metodo que recive los parametros de los campos que se van a actualizar y actualiza los datos en la base de datos y presenta un Componente Toast
  saveData(nombreInput:String, telefonoInput:String, iconoInput:String ){
    const path = 'Usuarios';
    const id = this.UidG;
    const updateDoc = {
      nombre : nombreInput,
      telefono: telefonoInput,
      icono: iconoInput
    };
    this.firebase.updateDoc(path, id, updateDoc).then(()=>{
      this.presentToastEdit()
    })
  };
  // ! Metodo que consume el componente Alert de ionic para actulizar los datos
  actualizarImg(){
    this.presentAlertIcono();
  }
  // ! Componente Alert que muestra los campos para editar la informacion
  // ? Mas informacion para el uso del alert: https://ionicframework.com/docs/api/alert
  async presentAlertIcono() {
    const alert = await this.alertController.create({
      header: 'Editar Icono de usuario',
      inputs: [
        {
          name : 'icono',
          type: 'text',
          placeholder: 'Selecciona tu foto de perfil'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Actualizar',
          handler: (e) => {
            console.log('Datos Actualizados');
            this.saveIcono(e.icono)
          }
        }
      ]
    });

    await alert.present();
  }
  // ! Metodo que recive los parametros de los campos que se van a actualizar y actualiza los datos en la base de datos y presenta un Componente Toast
  saveIcono(iconoInput:String ){
    const path = 'Usuarios';
    const id = this.UidG;
    const updateDoc = {
      icono: iconoInput
    };
    this.firebase.updateDoc(path, id, updateDoc).then(()=>{
      this.presentToastEdit()
    })
  } 
  // ! Metodo que consume el componente Alert de ionic para actulizar los datos
  actualizarNombre(){
    this.presentAlertNombre()
  }
  // ! Componente Alert que muestra los campos para editar la informacion
  // ? Mas informacion para el uso del alert: https://ionicframework.com/docs/api/alert
  async presentAlertNombre() {
    const alert = await this.alertController.create({
      header: 'Editar Nombre de Usuario',
      inputs: [
        {
          name : 'nombre',
          type: 'text',
          placeholder: 'Ingresa tu nombre completo'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Actualizar',
          handler: (e) => {
            console.log('Datos Actualizados');
            this.saveNombre(e.nombre)
          }
        }
      ]
    });

    await alert.present();
  }
  // ! Metodo que recive los parametros de los campos que se van a actualizar y actualiza los datos en la base de datos y presenta un Componente Toast
  saveNombre(nombreInput:String ){
    const path = 'Usuarios';
    const id = this.UidG;
    const updateDoc = {
      nombre: nombreInput
    };
    this.firebase.updateDoc(path, id, updateDoc).then(()=>{
      this.presentToastEdit()
    })
  } 
  // ! Metodo que consume el componente Alert de ionic para actulizar los datos "Por ahora esta en desuso"
  actualizarCorreo(){

  }
  // ! Metodo que consume el componente Alert de ionic para actulizar los datos
  actualizarTel(){
    this.presentAlertTel();
  }
  // ! Componente Alert que muestra los campos para editar la informacion
  // ? Mas informacion para el uso del alert: https://ionicframework.com/docs/api/alert
  async presentAlertTel() {
    const alert = await this.alertController.create({
      header: 'Editar N° de Celular',
      inputs: [
        {
          name : 'telefono',
          type: 'text',
          placeholder: 'Ingresa tu N° de Celular'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Actualizar',
          handler: (e) => {
            console.log('Datos Actualizados');
            this.saveTel(e.telefono)
          }
        }
      ]
    });

    await alert.present();
  }
  // ! Metodo que recive los parametros de los campos que se van a actualizar y actualiza los datos en la base de datos y presenta un Componente Toast
  saveTel(telefonoInput:String ){
    const path = 'Usuarios';
    const id = this.UidG;
    const updateDoc = {
      telefono: telefonoInput
    };
    this.firebase.updateDoc(path, id, updateDoc).then(()=>{
      this.presentToastEdit()
    })
  } 

}
