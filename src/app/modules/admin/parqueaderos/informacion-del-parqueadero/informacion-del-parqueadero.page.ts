import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AuthService } from 'src/app/services/auth.service';
import { ModalController } from '@ionic/angular';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

 
@Component({
  selector: 'app-informacion-del-parqueadero',
  templateUrl: './informacion-del-parqueadero.page.html',
  styleUrls: ['./informacion-del-parqueadero.page.scss'],
})
export class InformacionDelParqueaderoPage implements OnInit {
  // ! Propiedad que guarda el id del parqueadero extrayendolo de la url
  idParqueadero:string;
  // ! Propiedad que guarda la informacion del parqueadero
  infoPar;
  // ! Propiedad que guarda la informacion del usuario
  infoUser;
  // ! Propiedad que guerda la fecha en la que se genero el Pdf
  data;
  // ! Propiedad que guarda el Id del usuario actual
  UidG;
  // ! Propiedad que guarda la informacion del usuario actual
  dataUser;

  @Input() arreglo;


  constructor(
    // * Llamada a la clase ActivatedRoute que nos permite obtener el id que se le paso como paremetro 
    private activatedRoute:ActivatedRoute,
    // *  LLamando al servicio que se utilizara para el manejo de los datos
    private firebase: FirestoreService, 
    // * Llamando al servicio que se utilizara para los metodos de Autenticion o manejo de la sesion del usuario
    private log : AuthService,

    private modalController : ModalController
  ) { }

  // ! Creacion del metodo para crear los informes de los usuarios en PDF
  // ? Mas informacion de la libreria para generar PDF en: https://pdfmake.github.io/docs/0.1/
  createPdf(){
    const pdfDefiniton: any ={
      // ! Contenido del Pdf
      watermark: { text: 'TuParqueadero', fontSize: 140, color: '#1A97E8',opacity: 0.3, bold: true, italics: false  },
      content: [
        {
          width: '100%',
          height: '30px',
          text: `Informe de TuParqueadero `, style: `titulo`
        },
        ,{
          text: `Informe dirigido a TuParqueadero y/o ${this.infoUser.nombre}`,
          style: 'espacio'
        },
        {
          image: 'snow',
          width: 100,
          height: 100,
          alignment: 'center',
          lineHeight: 3
        },
        {
          text: `La Aplicación TuParqueadero informa que el Usuario ${this.infoUser.nombre} identificado en la plataforma con el ID ${this.infoUser.uid} dueño del parqueadero " ${this.infoPar.nameParqueadero } " con ID ${this.arreglo.Idparqueadero} ha aceptado el uso de su información al momento de hacer el registro en la plataforma y esta información será guardada y usada únicamente para validar temas legales entre un tercero, el usuario y TuParqueadero entre la información a utilizar estaría su nombre completo, su número de teléfono, su dirección de correo, el nombre de su parqueadero, la ubicación de su parqueadero, la dirección entre otros.`,
          style: 'espaciot'
        },
        {
          text: `Este documento fue elaborado el ${this.data}`
        }

      ],
      images:{
        snow: 'https://cdn-icons-png.flaticon.com/512/2439/2439758.png'      },

      styles:{
        tex:{
          alignment: 'center',
          lineHeight: 2 
        },
        titulo:{
          alignment: 'center',
          lineHeight: 3,
          bold: true,
          fontSize: 25,
          color: '#1A97E8'
        },
        espacio:{
          lineHeight: 2,
          fontSize: 15
        },
        espacios:{
          lineHeight: 7
        },
        espaciot:{
          lineHeight: 3,
          fontSize: 12,
          alignment: 'justify'
        }
      }
    }
    // ! Creacion del Pdf
    const pdf = pdfMake.createPdf(pdfDefiniton);
    // ! Descarga del Pdf
    pdf.download();
  }
  // ! Metodo del ciclo de vida de los componentes es lo primero que se ejecuta al entrar a nuestra vista
  ngOnInit() {
     


    // * Creamos una variable con el valor del objeto Date
    const data = new Date
    // * Luego le pasamos ese valor a la propiedad "data" para luego implementarla en nuestro Pdf
    this.data = data.toLocaleDateString()
    // ! Path donde se encuentran almacenados los datos de los usuarios de nuestra aplicacion
    const path = 'Usuarios'
    // ! Path donde se encuentran almacenados los datos de los parqueaderos de nuestra aplicacion
    const path2 = 'Parqueaderos'
    // ! Id del parqueadero y usuario que obtenemos atraves de la implementacion de la clase ActivatedRoute y guardamos en la propiedad idParqueadero
    this.idParqueadero = this.activatedRoute.snapshot.paramMap.get('id')
    // * Metodo para obtener la informacion del usuario recibe como parametros el path y el id del usuario luego guardamos la respuesta en la propiedad infoUser
    this.firebase.getDoc(path, this.arreglo.data.idUser).subscribe(res => this.infoUser = res)
    // * Metodo para obtener la informacion del parqueadero recibe como parametro el path y el id del parqueadero luego guardamos la respuesta en la propiedad infoPar
    this.firebase.getDoc(path2, this.arreglo.Idparqueadero).subscribe((res: any) => {
      this.infoPar = res
      console.log(res)
    })
    // * Metodo para obtener el Id del usuario actual 
    this.log.getUid().then( res => {
      // ! Propiedad que guarda la respuesta del metodo anterior
      this.UidG = res
      // ! Metodo que obtiene la informacion del usuario como parametros recibe el path y el Id del usuario actual
      this.firebase.getDoc('Usuarios', this.UidG ).subscribe(res => {
      // ! Propiedad que guarda la informacion de la respuesta
      this.dataUser = res
      });
    });

    this.activo = this.arreglo.data.estado;

    console.log(this.arreglo.data.estado)
  }
  // ! Metodo que muestra o oculta el menu del usuario
  abrir(){
    // * Constante que obtiene el elemento por el id "open2" para luego asignarle un evento
    const abrirM = ()=>{
    // ! Se obtiene el elemento por id "animacion2" y se le agrega una clase mediante un metodo llamado toggle el cual agrega la clase si esta no es parte del elemento o remueve la clase si esta ya forma parte de el
    // * La clase "active2" mostrara el menu 
    document.getElementById('animacion2').classList.toggle('active2');
    // * La clase "animated__bounceInLeft" hara una animacion en el menu cuando este se muestre
    document.getElementById('animacion2').classList.toggle('animate__bounceInLeft');
    }

    abrirM()
  }
  // * Funcion que consume el servicio de Autenticacion y le permite al usuario cerrar la sesion
 logout(){
    this.log.logout();
 }

  // ! Propiedades por defecto del boton para indicar si el estado del parqueadero esta activo o inactivo
  activo;
  color = 'primary';
  // ! Funcion que cambia el valor de las propiedades de Activo a Inactivo y viceversa junto con su color respectivo por ahora no genera cambios en la base de datos
  onClick(){
    if( this.activo == 'Activo'){
      this.activo = 'Inactivo'
      this.color = 'danger'
      const data = {
        estado: 'Inactivo'
      }
      this.firebase.updateDoc('Parqueaderos', this.arreglo.Idparqueadero, data)
    }
    else if( this.activo == 'Inactivo'){
      this.activo = 'Activo'
      this.color = 'success'
      const data = {
        estado: 'Activo'
      }
      this.firebase.updateDoc('Parqueaderos', this.arreglo.Idparqueadero, data)
    }
  }
  cerrar(){
    this.modalController.dismiss();
  }
}
