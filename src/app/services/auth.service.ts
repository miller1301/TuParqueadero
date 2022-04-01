import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from '../modelos/models';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authfirebase:AngularFireAuth, private router:Router) { }

  Recuperar(email:string){
    try {
      return this.authfirebase.sendPasswordResetEmail(email); 
    } catch (error) {
      console.log(error)
    }
  }

  login(correo:string, password: string){
    return this.authfirebase.signInWithEmailAndPassword(correo, password)
  }

  logout(){
    this.authfirebase.signOut()
    this.router.navigate(['/login'])
  }

  registrarUser(datos:User){
   return this.authfirebase.createUserWithEmailAndPassword(datos.correo, datos.password);
  }

  stateUser(){
    return this.authfirebase.authState;
  }

  async getUid(){
    const user = await this.authfirebase.currentUser
    return user.uid
  }


}
