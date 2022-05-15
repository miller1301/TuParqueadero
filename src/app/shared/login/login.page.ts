import { Component, OnInit } from '@angular/core';

// AngularFire
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import firebase from 'firebase/compat/app';
import { User } from 'src/app/modelos/models';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  emailInvalid: boolean;
  passwordInvalid: boolean;
  userNotFound: boolean;

  credenciales = {
    correo: null,
    password: null
  }

  userData: string[] = []

  constructor(public auth: AngularFireAuth,
      private authh: AuthService,
      private router: Router,
      private firestore: FirestoreService,
      private loading: LoadingController
    ) {}

  ngOnInit() {
    document.getElementById('menu-user').style.display="none";
  }

  loginFacebook() {
    this.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(success => {
      this.router.navigate(['/user']);
    });
  }

  loginTwitter() {
    this.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider()).then(success => {
      this.router.navigate(['/user']);
    });
  }

  // logout() {
  //   this.auth.signOut();
  // }

  async presentLoading() {
    const loading = await this.loading.create({
      message: 'Please wait...',
      duration: 1500
    });
    await loading.present();
  }

  async login() {
    this.presentLoading();
    const res =
    await this.authh.login(this.credenciales.correo, this.credenciales.password).catch(error => {
      console.log(error)
      if(error == 'FirebaseError: Firebase: The email address is badly formatted. (auth/invalid-email).'){
        this.emailInvalid = true;
        this.userNotFound = false;
        this.passwordInvalid = false;
      } else if(error == 'FirebaseError: Firebase: The password is invalid or the user does not have a password. (auth/wrong-password).'){
        this.passwordInvalid = true;
        this.emailInvalid = false;
        this.userNotFound = false;
      } else if(error == 'FirebaseError: Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).'){
        this.userNotFound = true;
        this.passwordInvalid = false;
        this.emailInvalid = false;
      }
    })
    if (res && res.user.emailVerified) {
      const path = 'Usuarios'
      const id = res.user.uid
      this.firestore.getDoc<any>(path, id).forEach(resp => {
        console.log(resp)
        localStorage.setItem('user', JSON.stringify(resp));
        if (resp.perfil === 'usuario') {
          this.router.navigate(['/user'])
        }
        else if (resp.perfil === 'administrador') {
          this.router.navigate(['/admin'])
          return;
        }
        else if (resp.perfil === 'parqueadero') {
          this.router.navigate(['/parqueadero'])
          return;
        }
        else if (resp.perfil === 'empleado') {
          this.router.navigate(['/empleado'])
          return;
        }

      })

      console.log('res =>', res);
      // this.router.navigate(['/home'])
    } else if(res){
      this.router.navigate(['/verificacion-email']);
    }
    this.credenciales = {
        correo: null,
        password: null
      }
  }

  async loginGoogle() {
    const res = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch(error => console.log(error))
    if (res) {

      this.router.navigate(['/user'])
    } else (
      console.log('No se pudo iniciar sesion')
    )


  }

  validarRol(){
    this.firestore.getDoc('Usuarios', 'duYqE5TrHDWAlHdyzeGnsW4C7Kr2').subscribe( (res: User) => {
      console.log(res);
      if(res.perfil === 'admin'){
        this.router.navigate(['/user']);
      } else{
        this.router.navigate(['/admin']);
      }
    });
  }
  

}
