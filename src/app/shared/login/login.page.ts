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

  constructor( public auth: AngularFireAuth, private authh: AuthService, private router:Router, private firestore: FirestoreService ) { }


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

  async login(){
    console.log("Credenciales", this.credenciales)
    const res = await this.authh.login(this.credenciales.correo, this.credenciales.password).catch( error => console.log(error))
    if (res) {
      console.log('res =>', res);
      this.router.navigate(['/admin'])
    }
  }

}
