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
    private loading: LoadingController
    ) { }



  ngOnInit() {
    document.getElementById('menu-user').style.display="none";
  }

 

  async loginGoogle() {
    const res:any = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch(error => console.log(error))
    const id = res.user.multiFactor.user.uid
    this.firestore.getDoc('Usuarios', id).subscribe((resLogin:any) =>{
      if(resLogin){
        return true
      }else {
        const data = {
          nombre: res.user.multiFactor.user.displayName,
          correo: res.user.multiFactor.user.email,
          telefono: res.user.multiFactor.user.phoneNumber,
          uid: res.user.multiFactor.user.uid,
          password: null,
          perfil: 'usuario',
          icono: res.user.multiFactor.user.photoURL
        };
        this.firestore.createDoc(data, 'Usuarios', id);
      }
    })
        

   this.firestore.getDoc('Usuarios', id).subscribe((resLogin:any) =>{

      if (resLogin.perfil === 'usuario') {
        this.router.navigate(['/user'])
      }
      else if (resLogin.perfil === 'administrador') {
        this.router.navigate(['/admin'])
        return;
      }
      else if (resLogin.perfil === 'parqueadero') {
        this.router.navigate(['/parqueadero'])
        return;
      }
      else if (resLogin.perfil === 'empleado') {
        this.router.navigate(['/empleado'])
        return;
      }

    })
    // if( res ){
    //   this.router.navigate(['/user'])
    // } else (
    //   console.log('No se pudo iniciar sesion')
    // )
    

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

  async presentLoading() {
    const loading = await this.loading.create({
      message: 'Please wait...',
      duration: 1000
    });
    await loading.present();
  }


  async registrar(){
    console.log("Datos", this.datos)
    const res = await this.authh.registrarUser(this.datos)
    .then( async res => {
      if(this.datos.password === this.verificar){
        if(this.datos.password.length >= 6)
        this.longitud = false
        this.invalid = false
        console.log('Exito al crear el usuario');
        const path = 'Usuarios';
        const id = res.user.uid;
        this.datos.uid = id;
        this.datos.password = null;
        this.authh.sendVerificationEmail();
        this.presentLoading()
        await this.firestore.createDoc(this.datos, path, id)
        this.router.navigate(['/verificacion-email'])
        return
        ;
      }else if(this.datos.password !== this.verificar){
          this.invalid = true;
          (this.datos.password.length >= 6)? (this.longitud = false):( this.longitud = true);
        
      }}
      )
      .catch( error =>{
        // document.write(error)
        if(error == 'FirebaseError: Firebase: Password should be at least 6 characters (auth/weak-password).'){
          this.caracteres = true
          this.email = false
          //  setTimeout(() => {
          //   this.caracteres = false
          // }, 5000);
          
        }
        else if(error == 'FirebaseError: Firebase: The email address is already in use by another account. (auth/email-already-in-use).'){
          this.email = true;
          this.caracteres = false
          // setTimeout(() => {
          //   this.email = false;
          // }, 5000);
        }
      }) 
  }
}

//El que "Sirve"
//   if(this.datos.password === this.verificar && this.datos.password.length >= 6){
//   this.longitud = false
//   this.invalid = false

//   console.log('Exito al crear el usuario');
//   const path = 'Usuarios';
//   const id = res.user.uid;
//   this.datos.uid = id;
//   this.datos.password = null;
//   this.authh.sendVerificationEmail();
//   await this.firestore.createDoc(this.datos, path, id)
//   this.router.navigate(['/verificacion-email']);
//   } else {
//     this.invalid = true
//     this.longitud = true
//   }
    
  
// }