import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import { DomSanitizer } from '@angular/platform-browser';

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
    private sanitizer : DomSanitizer
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
    const abrirM = document.getElementById('open4');
    abrirM.addEventListener('click', function(){
     document.getElementById('animacion4').classList.toggle('active4');
     document.getElementById('animacion4').classList.toggle('animate__bounceInLeft');
    })
 }

  
  logout(){
    this.log.logout()
  }
}
