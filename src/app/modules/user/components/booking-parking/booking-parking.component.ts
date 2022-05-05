import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { getAuth, onAuthStateChanged } from '@angular/fire/auth'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';
import Swal from 'sweetalert2'
import { MapsService } from 'src/app/services';

@Component({
  selector: 'app-booking-parking',
  templateUrl: './booking-parking.component.html',
  styleUrls: ['./booking-parking.component.scss'],
})
export class BookingParkingComponent implements OnInit {

  formReserva: FormGroup;
  idUser: string;

  @Input() parking

  constructor( 
    private modalController: ModalController, 
    private formBuilder: FormBuilder, 
    private firestoreService: FirestoreService,
    private mapsService: MapsService
  ) {}

  ngOnInit() {
    this.getDataUser();

    this.formReserva = this.formBuilder.group({
      time: ['', [Validators.required]],
      hour: ['', [Validators.required]],
      vehicle: ['', [Validators.required]],
      placa: ['', [Validators.required]],
      marca: ['', [Validators.required]]
    });
  }

  // Cerrar modal
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  // * Obtener datos del usuario autenticado
  getDataUser(){
    const auth = getAuth();
    onAuthStateChanged( auth, (user) => {
      if(user){
        this.idUser = user.uid;
        console.log(this.idUser);
      } else {
        return;
      }
    })
  }

  // * Enviar datos a colección reservas en Firebase
  onSubmit(){
    let data = {
      idUser: this.idUser,
      idParking: this.parking.id,
      nameParqueadero: this.parking.data.nameParqueadero,
      img: this.parking.data.img,
      direccion: this.parking.data.direccion,
      telefono: this.parking.data.telefono,
      timeParking: this.formReserva.value.time,
      hourArrive: this.formReserva.value.hour,
      typeVehicle: this.formReserva.value.vehicle,
      placaVehicle: this.formReserva.value.placa,
      marcaVehicle: this.formReserva.value.marca
    }
    if(this.formReserva.valid){
      console.log(this.mapsService.routeReady);
      this.firestoreService.createDocIdDefault('reservas', data).then( success => {
        this.formReserva.reset();
        Swal.fire({
          title: '¡Tu reserva fue exitosa!',
          icon: 'success',
          iconColor: '#1A97E8',
          confirmButtonText: 'Ver ruta',
          confirmButtonColor: '#1A97E8'
        }).then( success => {
          let { latitud, longitud  } = this.parking.data
          this.mapsService.getRouteBetweenPoints(this.mapsService.positionRealTime , [Number(longitud), Number(latitud)]);
          this.mapsService.routeReady = true;
          this.dismiss();
        })
      })
    }
  }
}
