import { Component, Input, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import { DomSanitizer } from '@angular/platform-browser';
import { PoppoverInfoComponent } from '../poppover-info/poppover-info.component';
import { CambioDeRolPage } from '../validacionCuentaParqueadero/cambio-de-rol/cambio-de-rol.page';

@Component({
  selector: 'app-validacion-cuenta-parqueadero',
  templateUrl: './validacion-cuenta-parqueadero.page.html',
  styleUrls: ['./validacion-cuenta-parqueadero.page.scss'],
})
export class ValidacionCuentaParqueaderoPage implements OnInit {

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
    else if(data.valor === 'usuario'){
      this.datosUser = false
      this.imagenes = false
      this.constitucion = false
      this.camara = false
      this.licencia = false
      this.Usuario = true
      this.cambio = false
    }
    
  }

  ngOnInit() {
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

  async presentModal() {
    const modal = await this.modalController.create({
      component: CambioDeRolPage,
      cssClass: 'my-custom-class',
      componentProps: {
        Parqueadero: this.Parqueadero
      }
    });
    return await modal.present();
  }

  cerrar(){
    this.modalController.dismiss();
  }
}
