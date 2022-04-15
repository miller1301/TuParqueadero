import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { getAuth, onAuthStateChanged } from '@angular/fire/auth'
import { EditReservComponent } from './edit-reserv/edit-reserv.component';
import { ModalController } from '@ionic/angular';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-crud-reservas',
  templateUrl: './crud-reservas.component.html',
  styleUrls: ['./crud-reservas.component.scss'],
})
export class CrudReservasComponent implements OnInit {

  // Reservas del usuario
  userBookings = [];
  // Id del usuario
  idUser: string;
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
      this.userBookings = [];
      bookings.forEach( (bookingData: any) => {
        if( bookingData.payload.doc.data().idUser == this.idUser ){
          this.userBookings.push({
          idBooking: bookingData.payload.doc.id,
          idUser: bookingData.payload.doc.data().idUser,
          data: bookingData.payload.doc.data()
        })
        } else{
          console.log('hola');
        }
      })
      console.log(this.userBookings);
    })
  }

  // * Abrir modal editar reserva
  async presentModal(index: number) {
    const modal = await this.modalController.create({
      component: EditReservComponent,
      cssClass: 'edit-reserv-modal',
      componentProps: {
        dataBooking: this.userBookings[index]
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
