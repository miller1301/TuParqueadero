import { Component, OnInit } from '@angular/core';
// AngularFire
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirestoreService } from 'src/app/services/firestore.service';
import { User } from 'src/app/modelos/models';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CrudPage implements OnInit {

  usuarios : User[] = [];

  id: string;

  datos: User = {
    nombre: null,
    correo: null,
    telefono: null,
    uid: null,
    password: null,
    perfil: 'empleado',
    icono: 'https://firebasestorage.googleapis.com/v0/b/tuparqueadero-178e4.appspot.com/o/user.png?alt=media&token=33002ea0-edf8-4d10-9f5b-9768d2ed8b0e'
  }

  private path = "Usuarios/";

  constructor(
    public firestoreService:FirestoreService,
    public auth: AngularFireAuth, 
    private authh: AuthService,
    private router:Router, 
    public modalController:ModalController) { }

  ngOnInit() {
    this.getEmpleado()
  }


  async rEmpleado(){
    console.log("Datos", this.datos)
    const res = await this.authh.registrarUser(this.datos)
    .then( async res => {
      console.log('Exito al crear el usuario');
      const path = 'Usuarios';
      const id = res.user.uid;
      this.datos.uid = id;
      this.datos.password = null;
      this.authh.sendVerificationEmail();
      await this.firestoreService.createDoc(this.datos, path, id)
      this.router.navigate(['/crud']);
    }).catch( error => console.log(error))
  }

  getEmpleado(){
    this.firestoreService.getCollection<User>(this.path).subscribe(res => {
       this.usuarios = res
    })
  }

  deleteUser(usuarios:User){
    this.firestoreService.deleteDoc(this.path, usuarios.uid)
  }
}