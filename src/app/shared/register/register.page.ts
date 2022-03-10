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

  caracteres: boolean;
  verificar: String = '';
  invalid:boolean;
  email:boolean;
  longitud:boolean;

  id: string;
  mensaje: string;

  datos: User = {
    nombre: null,
    correo: null,
    telefono: null,
    uid: null,
    password: null,
    perfil: 'usuario',
    icono: 'https://firebasestorage.googleapis.com/v0/b/tuparqueadero-178e4.appspot.com/o/user.png?alt=media&token=33002ea0-edf8-4d10-9f5b-9768d2ed8b0e'
  }

  constructor( 
    public auth: AngularFireAuth, 
    private authh: AuthService, 
    private firestore: FirestoreService, 
    private router:Router,
    ) { }



  ngOnInit() {
  }

  async loginGoogle() {
    const res = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch(error => console.log(error))
    if( res ){
      this.router.navigate(['/user'])
    } else (
      console.log('No se pudo iniciar sesion')
    )
    

  }

  loginFacebook() {
    this.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then( success => {
      this.router.navigate(['/user']);
    });
  }

  loginTwitter() {
    this.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider()).then( success => {
      this.router.navigate(['/user']);
    });
  }

  logout() {
    this.auth.signOut();
  }

  async registrar(){
    console.log("Datos", this.datos)
    const res = await this.authh.registrarUser(this.datos)
    .then( async res => {
      if(this.datos.password === this.verificar && this.datos.password.length > 5){
      this.longitud = false
      this.invalid = false

      console.log('Exito al crear el usuario');
      const path = 'Usuarios';
      const id = res.user.uid;
      this.datos.uid = id;
      this.datos.password = null;
      this.authh.sendVerificationEmail();
      await this.firestore.createDoc(this.datos, path, id)
      this.router.navigate(['/verificacion-email']);
      } else if (this.datos.password !== this.verificar && this.datos.password.length < 6) {
        this.invalid = true
        this.longitud = true
      }
    })
    .catch( error =>{
      (error === 'FirebaseError: Firebase: Password should be at least 6 characters (auth/weak-password)')? (this.caracteres = true): (this.caracteres = false);
      // (error === 'FirebaseError: Firebase: The email address is already in use by another account. (auth/email-already-in-use)')? (this.email = true): (this.email = false);

    }) 
  }
}
