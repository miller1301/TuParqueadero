import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { FirestoreService } from 'src/app/services/firestore.service';
import { AuthService } from 'src/app/services/auth.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

 
@Component({
  selector: 'app-informacion-usuario',
  templateUrl: './informacion-usuario.page.html',
  styleUrls: ['./informacion-usuario.page.scss'],
})
export class InformacionUsuarioPage implements OnInit {

  idUser;
  infoUser;
  data;
  UidG;
  dataUser;


  createPdf(){
    const pdfDefiniton: any ={
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
          text: `La Aplicación TuParqueadero informa que el Usuario ${this.infoUser.nombre} identificado en la plataforma con el ID ${this.infoUser.uid} ha aceptado el uso de su información al momento de hacer el registro en la plataforma y esta información será guardada y usada únicamente para validar temas legales entre un tercero, el usuario y TuParqueadero entre la información a utilizar estaría su nombre completo, su número de teléfono, su dirección de correo  entre otros.`,
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
  fecha;
  constructor( private activaredRouter: ActivatedRoute, private firebase:FirestoreService, private log : AuthService ) { }

  ngOnInit() {
    const data = new Date
    this.data = data.toLocaleDateString()
    this.fecha = data.getFullYear()
    this.idUser = this.activaredRouter.snapshot.paramMap.get('id');
    const path = 'Usuarios'
    this.firebase.getDoc(path, this.idUser).subscribe(res => this.infoUser = res)

    this.log.getUid().then( res => {
      this.UidG = res

      this.firebase.getDoc('Usuarios', this.UidG ).subscribe(res => {
        this.dataUser = res
      })
    })
  }

  logout(){
    this.log.logout()
  }
  abrir(){
    const abrirM = ()=>{
     document.getElementById('animacion3').classList.toggle('active3');
     document.getElementById('animacion3').classList.toggle('animate__bounceInLeft')

    }
    abrirM()
 }

 cerrar(){
  document.getElementById('animacion3').classList.remove('active3');
}

}
