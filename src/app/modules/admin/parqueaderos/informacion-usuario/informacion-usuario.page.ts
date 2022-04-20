import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { FirestoreService } from 'src/app/services/firestore.service';
import { AuthService } from 'src/app/services/auth.service';

 
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
      content: [
        {
          text: `Informe de TuParqueadero `, style: `tex`
        },
        {
          text: `Informe del usuario ${this.infoUser.nombre} identificado en la plataforma con el Id N° ${this.infoUser.uid} los siguientes datos seran usados para mantener todos nuestros archivos actualizados con informacion que el usuario nos brinda al momento de hacer su registro en TuParqueadero:`
        },{
          text: `Informacion del usuario`, style: `tex`
        },
        {
          ul: [
            ` Nombres Completos: ${this.infoUser.nombre}`,
            ` Numero de Telefono: ${this.infoUser.telefono}`,
            ` Direccion de correo: ${this.infoUser.correo}`,
            ` Rol de usuario: ${this.infoUser.perfil}`,
            ` ID del usuario: ${this.infoUser.uid} `
          ], style: `espacio`
        },
        {
          text: `Este documento fue realizado el ${this.data}`
        }

      ],
      styles:{
        tex:{
          alignment: 'center',
          lineHeight: 2 
        },
        espacio:{
          lineHeight: 2
        }
      }
    }

  }

  constructor( private activaredRouter: ActivatedRoute, private firebase:FirestoreService, private log : AuthService ) { }

  ngOnInit() {
    const data = new Date
    this.data = data.toLocaleDateString()

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

}
