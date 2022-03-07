import { Component, OnInit } from '@angular/core';

// AngularFire
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credenciales = {
    correo:null ,
    password: null
  }

  userData: string[] =[]

  constructor( public auth: AngularFireAuth, private authh: AuthService, private router:Router, private firestore: FirestoreService ) { }

  ngOnInit() {
  }

  

   loginFacebook() {
    this.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  loginTwitter() {
    this.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  }

  // logout() {
  //   this.auth.signOut();
  // }

  async login(){
    console.log("Credenciales", this.credenciales)
    const res = await this.authh.login(this.credenciales.correo, this.credenciales.password).catch( error => console.log(error))
    if (res) {
      const path ='Usuarios' 
      const id =  res.user.uid
       this.firestore.getDoc<any>(path, id).forEach( resp => {
        console.log(resp)
        if (resp.perfil === 'usuario'){
          this.router.navigate(['/home'])
        }
        else if(resp.perfil === 'administrador'){
          this.router.navigate(['/home/parqueaderos'])
          return;
        }
        else if(resp.perfil === 'parqueadero'){
          this.router.navigate(['/parqueadero'])
          return;
        }
        else if(resp.perfil === 'empleado'){
          this.router.navigate(['/empleado'])
          return;
        }

      })
      
      console.log('res =>', res);
      // this.router.navigate(['/home'])
    }
    this.credenciales = {
      correo:null ,
      password: null
    }
    this.credenciales = {
      correo:null ,
      password: null
    }
  }

  async loginGoogle() {
    const res = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch(error => console.log(error))
    if( res ){
      
      this.router.navigate(['/home'])
    } else (
      console.log('No se pudo iniciar sesion')
    )
    

  }

}
