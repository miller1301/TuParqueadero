import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/firestore.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-edit-reserv',
  templateUrl: './edit-reserv.component.html',
  styleUrls: ['./edit-reserv.component.scss'],
})
export class EditReservComponent implements OnInit {

  @Input() dataBooking;

  formEditReserva: FormGroup;

  constructor( private formBuilder: FormBuilder,  private modalController: ModalController, private firestoreService: FirestoreService ) { }

  ngOnInit() {
    console.log(this.dataBooking);

    this.formEditReserva = this.formBuilder.group({
      date: [new Date(this.dataBooking.data.dateBooking), [Validators.required]],
      time: [this.dataBooking.data.timeParking, [Validators.required]],
      hour: [this.dataBooking.data.hourArrive, [Validators.required]],
      vehicle: [this.dataBooking.data.typeVehicle, [Validators.required]],
      placa: [this.dataBooking.data.placaVehicle, [Validators.required]],
      marca: [this.dataBooking.data.marcaVehicle, [Validators.required]]
    });
  }

  // Cerrar modal
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  // * Enviar datos de reserva actualizados
  onSubmitUpdatedData(){
    console.log(this.formEditReserva.value);
    let updatedData = {
      dateBooking: this.formEditReserva.value.date.getTime(),
      timeParking: this.formEditReserva.value.time,
      hourArrive: this.formEditReserva.value.hour,
      typeVehicle: this.formEditReserva.value.vehicle,
      placaVehicle: this.formEditReserva.value.placa,
      marcaVehicle: this.formEditReserva.value.marca
    }
    if( this.formEditReserva.valid ){
      this.firestoreService.updateDoc('reservas', this.dataBooking.idBooking, updatedData).then( success => {
        Swal.fire({
          title: '¡Los datos de tu reserva fueron actualizados!',
          icon: 'success',
          iconColor: '#1A97E8',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#1A97E8'
        })
      })
    }
  }

}
