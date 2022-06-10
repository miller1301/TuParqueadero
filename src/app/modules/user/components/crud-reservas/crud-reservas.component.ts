import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { getAuth, onAuthStateChanged } from '@angular/fire/auth';
import { EditReservComponent } from './edit-reserv/edit-reserv.component';
import { ModalController } from '@ionic/angular';
import Swal from 'sweetalert2'

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

  constructor( private firestoreService: FirestoreService, public modalController: ModalController ) { }

  ngOnInit() {
    this.getDataUser();
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


}
