import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-cambio-de-rol',
  templateUrl: './cambio-de-rol.page.html',
  styleUrls: ['./cambio-de-rol.page.scss'],
})
export class CambioDeRolPage implements OnInit {


  constructor(private log : AuthService, private cambio:ActivatedRoute, private firebase:FirestoreService ) { }

  usuarioId;
  dataUser;
  parqueaderoId;
  dataParqueadero;
  valor: string = 'usuario'
  UidG;
  dataUsers;

  ngOnInit() {
    this.usuarioId = this.cambio.snapshot.paramMap.get('id')
    this.parqueaderoId = this.cambio.snapshot.paramMap.get('id')
    this.firebase.getDoc('Usuarios', this.usuarioId).subscribe(res => {
    this.dataUser = res;
    })
    this.firebase.getDoc('Parqueaderos', this.parqueaderoId).subscribe(res =>{
      this.dataParqueadero = res
    })

    this.log.getUid().then( res => {
      this.UidG = res

      this.firebase.getDoc('Usuarios', this.UidG ).subscribe(res => {
        this.dataUsers = res
      })
    })

  }
  logout(){
    this.log.logout()
  }

  

  abrir(){
     const abrirM = ()=>{
      document.getElementById('animacion5').classList.toggle('active5');
      document.getElementById('animacion5').classList.toggle('animate__bounceInLeft');
     }

     abrirM()
  }

  actualizarRol(){
    const path = 'Usuarios';
    const id = this.usuarioId;

    console.log("Usuario", this.valor)
    const actualizar = {
      perfil : this.valor
    }
    this.firebase.updateDoc(path, id, actualizar);

  }
}
