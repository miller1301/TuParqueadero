import { Component, OnInit } from '@angular/core';

// AngularFire
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { User } from 'src/app/modelos/models';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  

  id: string;

  datos: User = {
    nombre: null,
    correo: null,
    telefono: null,
    uid: null,
    password: null,
    perfil: 'usuario'
  }

  constructor( public auth: AngularFireAuth, private authh: AuthService, private firestore: FirestoreService, private router:Router ) { }



  ngOnInit() {
  }

  loginGoogle() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginFacebook() {
    this.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  loginTwitter() {
    this.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  }

  logout() {
    this.auth.signOut();
  }

  async registrar(){
    console.log("Datos", this.datos)
    const res = await this.authh.registrarUser(this.datos).catch( error => console.log(error))
    if(res){
      console.log('Exito al crear el usuario');
      const path = 'Usuarios';
      const id = res.user.uid;
      this.datos.uid = id;
      this.datos.password = null;
      await this.firestore.createDoc(this.datos, path, id)
      this.router.navigate(['/admin'])
    }
  }
}
