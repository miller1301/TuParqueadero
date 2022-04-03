import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-booking-parking',
  templateUrl: './booking-parking.component.html',
  styleUrls: ['./booking-parking.component.scss'],
})
export class BookingParkingComponent implements OnInit {

  constructor( private modalController: ModalController ) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
