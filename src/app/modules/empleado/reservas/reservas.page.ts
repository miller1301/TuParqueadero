import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';


@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {

  // Reservas del usuario
  parkingBookings = [];


  constructor(private firestoreService: FirestoreService) { }


  ngOnInit() {
    this.getBookingsParking()
  }

  // * Obtener todas las reservas
  getBookingsParking(){
    this.firestoreService.getAllDocs('reservas').subscribe( (bookings: any) => {
      this.parkingBookings = [];
      bookings.forEach( (bookingData: any) => {
        this.parkingBookings.push({
          idBooking: bookingData.payload.doc.id,
          idUser: bookingData.payload.doc.data().idUser,
          data: bookingData.payload.doc.data()
        })
      })
      console.log(this.parkingBookings);
    })
  }
}
