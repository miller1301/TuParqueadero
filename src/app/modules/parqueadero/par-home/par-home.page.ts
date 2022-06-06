import { Component, Input, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import { DomSanitizer } from '@angular/platform-browser';
import { PoppoverInfoComponent } from '../../admin/poppover-info/poppover-info.component';
import pdfMake from 'pdfmake/build/pdfmake';

@Component({
  selector: 'app-par-home',
  templateUrl: './par-home.page.html',
  styleUrls: ['./par-home.page.scss'],
})
export class ParHomePage implements OnInit {
  idDueñoParqueadero:string;

  constructor(
    private log : AuthService,
    private activatedRoute: ActivatedRoute,
    private firestore:FirestoreService,
    private sanitizer : DomSanitizer,
    private popoverController : PopoverController,
    private modalController: ModalController
    ) {}

    @Input() Parqueadero;
  
  time;
  ver;
  user;
  data;
  UidG;
  dataUser;
  pdf1Valor;
  pdf2Valor;
  pdf3Valor;
  pdf4Valor;

  Usuario:boolean;
  datosUser:boolean = true;
  imagenes:boolean;
  constitucion:boolean;
  camara:boolean;
  licencia:boolean;
  seguridad:boolean;
  cambio:boolean = true

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
          text: `Informe dirigido a TuParqueadero y/o ${this.ver.nombre}`,
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
          text: `La Aplicación TuParqueadero informa que el Usuario ${this.ver.nombre} identificado en la plataforma con el ID ${this.ver.uid} dueño del parqueadero " ${this.Parqueadero.data.nameParqueadero } " ha aceptado el uso de su información al momento de hacer el registro en la plataforma y esta información será guardada y usada únicamente para validar temas legales entre un tercero, el usuario y TuParqueadero entre la información a utilizar estaría su nombre completo, su número de teléfono, su dirección de correo, el nombre de su parqueadero, la ubicación de su parqueadero, la dirección entre otros.`,
          style: 'espaciot'
        },
        {
          text: `Este documento fue elaborado el ${this.time}`
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
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PoppoverInfoComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { data } = await popover.onWillDismiss();
    console.log(data.valor)

    if( data.valor === 'datos usuario' ){
      this.datosUser = true
      this.imagenes = false
      this.constitucion = false
      this.camara = false
      this.licencia = false
      this.seguridad = false
      this.cambio = true
      this.Usuario = false
    }
    else if ( data.valor === 'imagenes'){
      this.datosUser = false
      this.imagenes = true
      this.constitucion = false
      this.camara = false
      this.licencia = false
      this.seguridad = false
      this.cambio = false
      this.Usuario = false

    }
    else if(data.valor === 'constitucion'){
      this.datosUser = false
      this.imagenes = false
      this.constitucion = true
      this.camara = false
      this.licencia = false
      this.seguridad = false
      this.cambio = false
      this.Usuario = false

    }
    else if(data.valor === 'camara'){
      this.datosUser = false
      this.imagenes = false
      this.constitucion = false
      this.camara = true
      this.licencia = false
      this.seguridad = false
      this.cambio = false
      this.Usuario = false

    }
    else if(data.valor === 'licencia'){
      this.datosUser = false
      this.imagenes = false
      this.constitucion = false
      this.camara = false
      this.licencia = true
      this.seguridad = false
      this.cambio = false
      this.Usuario = false

    }
    
  }

  ngOnInit() {

    const time = new Date
    // * Luego le pasamos ese valor a la propiedad "data" para luego implementarla en nuestro Pdf
    this.time = time.toLocaleDateString()

     this.idDueñoParqueadero = this.activatedRoute.snapshot.paramMap.get('id')

    

      this.pdf1Valor = this.sanitizer.bypassSecurityTrustResourceUrl(this.Parqueadero.data.constitucion_poliza)
      this.pdf2Valor = this.sanitizer.bypassSecurityTrustResourceUrl(this.Parqueadero.data.camara_comercio)
      this.pdf3Valor = this.sanitizer.bypassSecurityTrustResourceUrl(this.Parqueadero.data.licencia_funcionamiento)
      this.pdf4Valor = this.sanitizer.bypassSecurityTrustResourceUrl(this.Parqueadero.data.documento_seguridad)


     console.log(this.pdf1Valor, this.pdf2Valor, this.pdf3Valor, this.pdf4Valor);


     this.log.getUid().then( (res:any) => {
      this.UidG = res

      this.firestore.getDoc('Usuarios', this.UidG ).subscribe(res => {
        this.dataUser = res
      })
    })
    console.log(this.Parqueadero)
    this.user = this.Parqueadero.data.idUser
    this.firestore.getDoc('Usuarios', this.user).subscribe(res => {
      this.ver = res
      console.log(this.ver)
    })
  }


  



  abrir(){
    const abrirMenu = ()=> {
      document.getElementById('animacion4').classList.toggle('active4');
     document.getElementById('animacion4').classList.toggle('animate__bounceInLeft');
    }
    abrirMenu()
 }

//  const abrirM = document.getElementById('open4');
//     abrirM.addEventListener('dblclick', function(){
//      document.getElementById('animacion4').classList.toggle('active4');
//      document.getElementById('animacion4').classList.toggle('animate__bounceInLeft');
//     })

 
  
  logout(){
    this.log.logout()
  }

  cerrar(){
    this.modalController.dismiss();
  }
}