import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';

@Component({
  selector: 'app-register-parking',
  templateUrl: './register-parking.component.html',
  styleUrls: ['./register-parking.component.scss'],
})
export class RegisterParkingComponent implements OnInit {

  @ViewChild("images", {
    read: ElementRef
  }) images: ElementRef;

  formRegistroParking: FormGroup;
  mensajeArchivo = 'No hay un archivo seleccionado';
  imagenesForm = new FormData();
  nombreArchivo = '';
  URLPublica = '';
  porcentaje = 0;
  finalizado = false;

  constructor( private formBuilder: FormBuilder, private firebaseStorageService: FirebaseStorageService ) { }

  ngOnInit() {

    this.formRegistroParking = this.formBuilder.group({
      name: ['', [Validators.required]],
      location: ['', [Validators.required]],
      latitud: ['', [Validators.required]],
      longitud: ['', [Validators.required]],
      schedule: ['', [Validators.required]],
      tarifa: ['', [Validators.required]],
      images: ['', Validators.required]
    });

  }

  //Evento que se gatilla cuando el input de tipo archivo cambia
  public cambioArchivo(event) {
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        console.log('sii');
        this.mensajeArchivo = `Archivo preparado: ${event.target.files[i].name}`;
        this.nombreArchivo = event.target.files[i].name;
        this.imagenesForm.delete('archivo');
        this.imagenesForm.append('archivo', event.target.files[i], event.target.files[i].name)
      }
    } else {
      this.mensajeArchivo = 'No hay un archivo seleccionado';
    }
  }

  //Sube el archivo a Cloud Storage
  public subirArchivo() {
    // let archivos = this.images.nativeElement.files;
    // console.log(archivos);
    let archivo = this.imagenesForm.get('archivo');
    let tarea = this.firebaseStorageService.tareaCloudStorage(this.nombreArchivo, archivo);
    let referencia = this.firebaseStorageService.referenciaCloudStorage(this.nombreArchivo);

    //Cambia el porcentaje
    tarea.percentageChanges().subscribe((porcentaje) => {
      this.porcentaje = Math.round(porcentaje);
      if (this.porcentaje == 100) {
        this.finalizado = true;
      }
    });

    referencia.getDownloadURL().subscribe((URL) => {
      this.URLPublica = URL;
      console.log(this.URLPublica);
    });
  }

  onSubmit(){
    console.log(this.formRegistroParking.value);
  }

}
