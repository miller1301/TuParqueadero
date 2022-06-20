import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { getAuth, onAuthStateChanged } from '@angular/fire/auth';
import { EditReservComponent } from './edit-reserv/edit-reserv.component';
import { ModalController } from '@ionic/angular';
import Swal from 'sweetalert2'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-crud-reservas',
  templateUrl: './crud-reservas.component.html',
  styleUrls: ['./crud-reservas.component.scss'],
})
export class CrudReservasComponent implements OnInit {

  // Id del usuario
  idUser: string;
  // Reservas del usuario
  bookings = [];
  // Reservas Realizadas
  bookingsMade = [];
  // Reservas Programadas
  bookingsScheduled = [];
  // Estado de la reserva
  statusBooking = [];
  // Filtro de busqueda de reservas
  filterBooking: string = 'Todas';
  // The `ion-modal` element reference.
  modal: HTMLElement;

  dataUser: any;

  constructor( private firestoreService: FirestoreService, public modalController: ModalController, private auth: AuthService ) { }

  ngOnInit() {
    this.getDataUser();
    this.getUser();
    this.getBookingsUser();
  }

  // * Obtener datos del usuario autenticado
  getDataUser(){
    const auth = getAuth();
    onAuthStateChanged( auth, (user) => {
      if(user){
        this.idUser = user.uid;
      } else {
        return;
      }
    })
  }

  // * Obtener datos del usuario
  getUser(){
    if( localStorage.getItem('user') ){
      let user = localStorage.getItem('user');
      this.dataUser = JSON.parse(user);
    } else{
      this.auth.getUid().then( id => {
        this.firestoreService.getDoc('Usuarios', id).subscribe( data => {
          localStorage.setItem('user', JSON.stringify(data))
          this.dataUser = data;
        });
      });
    }

  }

  // * Obtener todas las reservas del usuario
  getBookingsUser(){
    this.firestoreService.getAllDocs('reservas').subscribe( (bookings: any) => {
      this.bookings = [];
      bookings.forEach( (bookingData: any) => {
        if( bookingData.payload.doc.data().idUser == this.idUser ){
          this.bookings.push({
          idBooking: bookingData.payload.doc.id,
          idUser: bookingData.payload.doc.data().idUser,
          data: bookingData.payload.doc.data(),
        })
        } else{
          console.log('No Hay Data');
        }
      })
      this.validateStatusBooking();
    })
  }

  // * Validar estado de la reserva
  validateStatusBooking(){
    // Obtenemos la fecha actual
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    // Fecha con formato legible
    const dateNow = hoy.toLocaleDateString();
    // hoy.getTime() -> Fecha en timestamps (milisegundos)
    console.log(hoy.getTime());
    this.bookings.forEach( booking => {
      if( booking.data.dateBooking >= hoy.getTime() ){
        console.log('Reserva programada');
        this.statusBooking.push({
          idBooking: booking.data.idBooking,
          status: 'Programada'
        })
        booking['status'] = 'Programada'
      } else{
        console.log('Reserva realizada');
        this.statusBooking.push({
          idBooking: booking.data.idBooking,
          status: 'Realizada'
        })
        booking['status'] = 'Realizada'
      }
    });
  }

  // Filtro de reservas (Todas, programadas y realizadas)
  filterStatusBooking(filterStatus: string){
    if( filterStatus == 'Programadas' ){
      this.filterBooking = 'Programadas';
      this.bookingsScheduled = this.bookings.filter( bookings => bookings.status == 'Programada');
      console.log(this.bookingsScheduled);
    } else if( filterStatus == 'Realizadas' ){
      this.filterBooking = 'Realizadas';
      this.bookingsMade = this.bookings.filter( bookings => bookings.status == 'Realizada');
      console.log(this.bookingsMade);
    } else{
      this.filterBooking = 'Todas';
    }
  }

  // TODO: Ver ruta de la reserva
  watchRouteBooking(){

  }

  // * Abrir modal editar reserva
  async presentModal(index: number) {
    const modal = await this.modalController.create({
      component: EditReservComponent,
      cssClass: 'edit-reserv-modal',
      componentProps: {
        dataBooking: this.bookings[index]
      }
    });
    return await modal.present();
  }

  // * Eliminar reserva
  deleteBooking(idBooking: string){
    Swal.fire({
      title: '¿Estás seguro de eliminar la reserva?',
      icon: 'error',
      iconColor: '#1A97E8',
      confirmButtonText: 'Eliminar',
      confirmButtonColor: '#F00',
      showCancelButton: true,
      cancelButtonText: 'Cancelar'
    }).then( (result) => {
      if(result.isConfirmed){
        this.firestoreService.deleteDoc('reservas', idBooking);
      }
    })
  }


  // * Abrir menú de usuario
  abrir(){
    const abrirM = ()=>{
    // La funcion a ejecutar es la siguiente
    // Se obtiene el elemento por id "animacion" y se le agrega una clase mediante un metodo llamado toggle el cual agrega la clase si esta no es parte del elemento o remueve la clase si esta ya forma parte de el
    // La clase "active" mostrara el menu 
    document.getElementById('animacionMenuReservas').classList.toggle('active');
    // La clase "animated__bounceInLeft" hara una animacion en el menu cuando este se muestre
    document.getElementById('animacionMenuReservas').classList.toggle('animate__bounceInLeft');
    }
    abrirM();
  }

}
