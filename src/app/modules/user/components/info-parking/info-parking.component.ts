import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BookingParkingComponent } from '../booking-parking/booking-parking.component';

@Component({
  selector: 'app-info-parking',
  templateUrl: './info-parking.component.html',
  styleUrls: ['./info-parking.component.scss'],
})
export class InfoParkingComponent implements OnInit {

  // Recibimos información del parqueadero abierto
  @Input() parking;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor( private modalController: ModalController ) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async bookingModal(){
    const modal = await this.modalController.create({
      component: BookingParkingComponent,
      cssClass: 'modal-booking-parking'
    });
    return await modal.present();
  }

}
