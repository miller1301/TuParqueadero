import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import {  User } from '../modelos/models';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public authfirebase:AngularFireAuth, private router:Router) { }

  async sendVerificationEmail(){
    return (await this.authfirebase.currentUser).sendEmailVerification();
  }

  Recuperar(email:string){
    try {
      return this.authfirebase.sendPasswordResetEmail(email); 
    } catch (error) {
      console.log(error)
    }
  }

  actulizarP(user){
    return this.authfirebase.updateCurrentUser(user);
  }

  login(correo:string, password: string){
    return this.authfirebase.signInWithEmailAndPassword(correo, password)
  }

  logout(){
    this.authfirebase.signOut()
    this.router.navigate(['/login'])
    localStorage.clear();
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
