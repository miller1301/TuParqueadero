import { Component, Input, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import { DomSanitizer } from '@angular/platform-browser';
import { PoppoverInfoComponent } from '../poppover-info/poppover-info.component';

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
    private popoverController : PopoverController
    ) {}

  data;
  UidG;
  dataUser;
  pdf1;
  pdf2;
  pdf3;
  pdf4;
  pdf1Valor;
  pdf2Valor;
  pdf3Valor;
  pdf4Valor;


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
    }
    else if ( data.valor === 'imagenes'){
      this.datosUser = false
      this.imagenes = true
      this.constitucion = false
      this.camara = false
      this.licencia = false
      this.seguridad = false
      this.cambio = false
    }
    else if(data.valor === 'constitucion'){
      this.datosUser = false
      this.imagenes = false
      this.constitucion = true
      this.camara = false
      this.licencia = false
      this.seguridad = false
      this.cambio = false
    }
    else if(data.valor === 'camara'){
      this.datosUser = false
      this.imagenes = false
      this.constitucion = false
      this.camara = true
      this.licencia = false
      this.seguridad = false
      this.cambio = false
    }
    else if(data.valor === 'licencia'){
      this.datosUser = false
      this.imagenes = false
      this.constitucion = false
      this.camara = false
      this.licencia = true
      this.seguridad = false
      this.cambio = false
    }
    else if(data.valor === 'seguridad'){
      this.datosUser = false
      this.imagenes = false
      this.constitucion = false
      this.camara = false
      this.licencia = false
      this.seguridad = true
      this.cambio = false
    }
    
  }

  ngOnInit() {
     this.idDueñoParqueadero = this.activatedRoute.snapshot.paramMap.get('id')

     this.firestore.getDoc('Parqueaderos', this.idDueñoParqueadero).subscribe((res:any) => {
      this.data = res
      this.pdf1 = res.constitucion_poliza
      this.pdf2 = res.camara_comercio
      this.pdf3 = res.licencia_funcionamiento
      this.pdf4 = res.documento_seguridad

      this.pdf1Valor = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdf1)
      this.pdf2Valor = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdf2)
      this.pdf3Valor = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdf3)
      this.pdf4Valor = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdf4)
     });

     this.log.getUid().then( res => {
      this.UidG = res

      this.firestore.getDoc('Usuarios', this.UidG ).subscribe(res => {
        this.dataUser = res
      })
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
}
