import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.scss'],
})
export class MenuUserComponent implements OnInit {

  dataUser: any;

  constructor( private firestore: FirestoreService, private auth: AuthService, private router: Router ) { }

  ngOnInit() {
    this.getUser();
  }

  // * Obtener datos del usuario
  getUser(){
    if( localStorage.getItem('user') ){
      let user = localStorage.getItem('user');
      this.dataUser = JSON.parse(user);
    } else{
      this.auth.getUid().then( id => {
        this.firestore.getDoc('Usuarios', id).subscribe( data => {
          localStorage.setItem('user', JSON.stringify(data))
          this.dataUser = data;
        });
      });
    }
  }

  // * Funcion que consume el servicio de Autenticacion y le permite al usuario cerrar la sesion
  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }


  // * Abrir menú de usuario
  abrir(){
    const abrirM = ()=>{
    // La funcion a ejecutar es la siguiente
    // Se obtiene el elemento por id "animacion" y se le agrega una clase mediante un metodo llamado toggle el cual agrega la clase si esta no es parte del elemento o remueve la clase si esta ya forma parte de el
    // La clase "active" mostrara el menu 
    document.getElementById('animacion').classList.toggle('active');
    // La clase "animated__bounceInLeft" hara una animacion en el menu cuando este se muestre
    document.getElementById('animacion').classList.toggle('animate__bounceInLeft');
    }
    abrirM();
  }

}
