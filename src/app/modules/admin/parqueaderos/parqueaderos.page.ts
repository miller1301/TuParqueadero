// import { Component, OnInit } from '@angular/core';
// import { AuthService } from 'src/app/services/auth.service';
// import { FirestoreService } from 'src/app/services/firestore.service';

// @Component({
//   selector: 'app-parqueaderos',
//   templateUrl: './parqueaderos.page.html',
//   styleUrls: ['./parqueaderos.page.scss'],
// })
// export class ParqueaderosPage implements OnInit {

//   constructor(
//     // * Llamando al servicio que se utilizara para los metodos de Autenticion o manejo de la sesion del usuario
//     private auth:AuthService,
//     // *  LLamando al servicio que se utilizara para el manejo de los datos de los filtros
//     private firebase:FirestoreService
//   ) { }
  
//   // ! Propiedad que guarda la informacion de los parqueaderos traidos de la BD
//   parqueaderos;
//   // ! Propiedad que nos indica si mostrar o ocultar la informacion de los parqueaderos
//   mostrarParqueaderos:Boolean = false
//   // ! Propiedad que guarda la informacion de los usuarios traidos de la BD
//   usuariosL;
//   // ! Propiedad que nos indica si mostrar o ocultar la informacion de los usuarios
//   mostrarUsuarios:Boolean = false
//   // ! Propiedad que nos indica si mostrar o ocultar la informacion de los usuarios con rol de administrador
//   mostrarAdmin:Boolean = false;
//   // ! Propiedad que nos indica si mostrar o ocultar la informacion de los usuarios con rol de usuarios 
//   mostrarUsuario:Boolean = false
//   // ! Propiedad que por ahora se encuentra en desuso
//   usuarioL: any[] = [];
//   // ! Propiedad que nos indica si mostrar o ocultar la informacion de los usuarios con rol parqueadero
//   mostrarDueno:Boolean = false;
//   // ! Propiedad que nos indica si mostrar o ocultar la informacion de los usuarios con rol empleado
//   mostrarEmpleado:Boolean = false;
//   // ! Propiedad que nos indica si mostrar o ocultar  un mensaje informativo para el usuario
//   mensajeDeSeleccion:Boolean = true
//   // ! Propieda que almacena el ID del usuario de la sesion actual
//   UidG;
//   // ! Propiedad que almacena la informacion del usuario actual
//   dataUser;

//   // ! Metodo del ciclo de vida de los componentes es lo primero que se ejecuta al entrar a nuestra vista
//   ngOnInit() {
//     // ! Metodo que se ejecuta para traer los datos de los usuarios luego esperamos su respuesta "res" y se la asignamos a la propiedad "usuariosL" para luego ser consumida en la vista
//     const path = 'Usuarios'
//     this.firebase.getDoc(path).subscribe(res => this.usuariosL = res)
//     // ! Metodo por ahora en desuso
//     // this.firebase.getDocs(path).subscribe((res:any[]) => {
//     //   console.log(res)
//     //     for (let i = 0; i < res.length; i++) {
//     //       if( res[i].perfil === 'usuario' ){
//     //          const nuevo = Object.values(res[i])
//     //          this.usuarioL.push(nuevo)
//     //          console.log(this.usuarioL)
//     //       }
//     //     }
//     // })
//     // ! Metodo que se ejecuta para traer los datos de los parqueaderos luego esperamos su respuesta "res" y se la asignamos a la propiedad "parqueaderos" para luego ser consumida en la vista
//     const pathP = '`parqueaderos';
//     this.firebase.getDoc(pathP).subscribe(res => {
//       this.parqueaderos = res
//     });
//     // ! Metodo que se ejecuta para traer el ID del usuario actual y luego traer la respectiva informacion del usuario
//     this.auth.getUid().then( res => {
//       // * Propiedad que almacena el Id del usuario actual
//       this.UidG = res
//       // ! Metodo que se ejecuta para traer la informacion del usuario actual, Informacion que se consumira en el menu
//       this.firebase.getDoc('Usuarios', this.UidG ).subscribe(res => {
//       // * Propiedad que almacena la informacion del usuario actual 
//         this.dataUser = res
//       });
//     });
//   }

//   // ! Metodo que pone todas las propiedades de muestra de datos en false y unicamente deja en true la propiedad que contiene la informacion que necesitamos
//   usuarios(){
//     this.mostrarUsuarios = true;
//     this.mostrarUsuario = false;
//     this.mostrarParqueaderos = false;
//     this.mensajeDeSeleccion = false;
//     this.mostrarAdmin = false;
//     this.mostrarDueno = false;
//     this.mostrarEmpleado = false;
//   }
//   // ! Metodo que pone todas las propiedades de muestra de datos en false y unicamente deja en true la propiedad que contiene la informacion que necesitamos
//   usuario(){
//     this.mostrarUsuarios = false;
//     this.mostrarUsuario = true;
//     this.mostrarParqueaderos = false;
//     this.mensajeDeSeleccion = false;
//     this.mostrarAdmin = false;
//     this.mostrarDueno = false;
//     this.mostrarEmpleado = false;
//   }
//   // ! Metodo que pone todas las propiedades de muestra de datos en false y unicamente deja en true la propiedad que contiene la informacion que necesitamos
//   admin(){
//     this.mostrarUsuarios = false;
//     this.mostrarUsuario = false;
//     this.mostrarParqueaderos = false;
//     this.mensajeDeSeleccion = false;
//     this.mostrarAdmin = true;
//     this.mostrarDueno = false;
//     this.mostrarEmpleado = false;
//   }
//   // ! Metodo que pone todas las propiedades de muestra de datos en false y unicamente deja en true la propiedad que contiene la informacion que necesitamos
//   dueno(){
//     this.mostrarUsuarios = false;
//     this.mostrarUsuario = false;
//     this.mostrarParqueaderos = false;
//     this.mensajeDeSeleccion = false;
//     this.mostrarAdmin = false;
//     this.mostrarDueno = true;
//     this.mostrarEmpleado = false;
//   }
//   // ! Metodo que pone todas las propiedades de muestra de datos en false y unicamente deja en true la propiedad que contiene la informacion que necesitamos
//   empleado(){
//     this.mostrarUsuarios = false;
//     this.mostrarUsuario = false;
//     this.mostrarParqueaderos = false;
//     this.mensajeDeSeleccion = false;
//     this.mostrarAdmin = false;
//     this.mostrarDueno = false;
//     this.mostrarEmpleado = true;
//   }
//   // ! Metodo que pone todas las propiedades de muestra de datos en false y unicamente deja en true la propiedad que contiene la informacion que necesitamos
//   parqueadero(){
//     this.mostrarUsuarios = false;
//     this.mostrarUsuario = false;
//     this.mostrarParqueaderos = true;
//     this.mensajeDeSeleccion = false;
//     this.mostrarAdmin = false;
//     this.mostrarDueno = false;
//     this.mostrarEmpleado = false;
//   }
//   // ! Metodo que pone todas las propiedades de muestra de datos en false y unicamente deja en true la propiedad que contiene el mensaje de seleccion 
//   otro(){
//     this.mostrarUsuarios = false;
//     this.mostrarUsuario = false;
//     this.mostrarParqueaderos = false;
//     this.mensajeDeSeleccion = true;
//     this.mostrarAdmin = false;
//     this.mostrarDueno = false;
//     this.mostrarEmpleado = false;
//   }
//   // * Funcion que consume el servicio de Autenticacion y le permite al usuario cerrar la sesion
//   logout() {
//     this.auth.logout();
//   }
//   // ! Metodo que muestra o oculta el menu del usuario
//   abrir(){
//     const abrirM = ()=>{
//       // * La clase "active1" mostrara el menu 
//       document.getElementById('animacion1').classList.toggle('active1');
//       // * La clase "animated__bounceInLeft" hara una animacion en el menu cuando este se muestre
//       document.getElementById('animacion1').classList.toggle('animate__bounceInLeft');
//     }
//     abrirM()
    
//   }

//   textoBuscar:string = '';

//   onSearchChange( event ){
//   // console.log( event )
//   this.textoBuscar = event.detail.value;
//   }
// }
