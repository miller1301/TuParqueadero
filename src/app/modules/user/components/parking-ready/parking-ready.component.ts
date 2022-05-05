import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parking-ready',
  templateUrl: './parking-ready.component.html',
  styleUrls: ['./parking-ready.component.scss'],
})
export class ParkingReadyComponent implements OnInit {

  hoursInitial: any;
  minutesInitial: any;

  constructor() { }

  ngOnInit() {
    this.getTime()
  }

  getTime(){
    let time = new Date();
    this.hoursInitial = time.getHours();
    if( this.hoursInitial < 10 ){
      this.hoursInitial = `0${this.hoursInitial}`
    }
    this.minutesInitial = time.getMinutes();
    if( this.minutesInitial < 10 ){
      this.minutesInitial = `0${this.minutesInitial}`
    }
    console.log(this.hoursInitial, this.minutesInitial);
  }

  // TODO Enviar hora de llegada a colección estado de reserva

}
