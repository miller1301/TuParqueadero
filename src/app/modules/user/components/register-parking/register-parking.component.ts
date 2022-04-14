import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import Swal from 'sweetalert2'

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

  // Propiedades con las rutas de los archivos subidos
  uploadImages = '';
  uploadDocPoliza = '';
  uploadDocComercio = '';
  uploadDocLicencia = '';

  constructor( 
    private formBuilder: FormBuilder, 
    private fireStorageService: FirebaseStorageService,
    private firestoreService: FirestoreService
    ) { }

  ngOnInit() {

    this.formRegistroParking = this.formBuilder.group({
      name: ['', [Validators.required]],
      location: ['', [Validators.required]],
      municipio: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
      latitud: ['', [Validators.required]],
      longitud: ['', [Validators.required]],
      schedule: ['', [Validators.required]],
      tarifa: ['', [Validators.required]],
      solicitud: ['', [Validators.required]],
      images: ['', Validators.required],
      poliza: ['', Validators.required],
      comercio: ['', Validators.required],
      licencia: ['', Validators.required],
    });

  }

  // TODO: Hacer que el path enviado en las funciones del Storage se le agregue el nombre del parqueadero del input

  // * Subir imágenes del parqueadero al storage y retornar url
  // TODO: Realizar función para subir varias imagenes al tiempo
  async newImageUpload(event: any){
    const path = 'register-parking';
    const name = event.target.files[0].name;
    const file = event.target.files[0];
    const res = await this.fireStorageService.uploadFile(file, path, name);
    console.log(res);
    this.uploadImages = res;
  }

  // * Subir poliza al Storage y retornar link
  async polizaUpload(event: any){
    const path = 'register-parking';
    const name = event.target.files[0].name;
    const file = event.target.files[0];
    const res = await this.fireStorageService.uploadFile(file, path, name);
    console.log(res);
    this.uploadDocPoliza = res;
  }

  // * Subir cámara de comercio al Storage y retornar link
  async camaraComercioUpload(event: any){
    const path = 'register-parking';
    const name = event.target.files[0].name;
    const file = event.target.files[0];
    const res = await this.fireStorageService.uploadFile(file, path, name);
    console.log(res);
    this.uploadDocComercio = res;
  }

  // * Subir licencia de funcionamiento al Storage y retornar link
  async licenciaUpload(event: any){
    const path = 'register-parking';
    const name = event.target.files[0].name;
    const file = event.target.files[0];
    const res = await this.fireStorageService.uploadFile(file, path, name);
    console.log(res);
    this.uploadDocLicencia = res;
  }

  // //Evento que se gatilla cuando el input de tipo archivo cambia
  // public cambioArchivo(event) {
  //   if (event.target.files.length > 0) {
  //     for (let i = 0; i < event.target.files.length; i++) {
  //       console.log('sii');
  //       this.mensajeArchivo = `Archivo preparado: ${event.target.files[i].name}`;
  //       this.nombreArchivo = event.target.files[i].name;
  //       this.imagenesForm.delete('archivo');
  //       this.imagenesForm.append('archivo', event.target.files[i], event.target.files[i].name)
  //     }
  //   } else {
  //     this.mensajeArchivo = 'No hay un archivo seleccionado';
  //   }
  // }

  // //Sube el archivo a Cloud Storage
  // public subirArchivo() {
  //   // let archivos = this.images.nativeElement.files;
  //   // console.log(archivos);
  //   let archivo = this.imagenesForm.get('archivo');
  //   let tarea = this.firebaseStorageService.tareaCloudStorage(this.nombreArchivo, archivo);
  //   let referencia = this.firebaseStorageService.referenciaCloudStorage(this.nombreArchivo);

  //   //Cambia el porcentaje
  //   tarea.percentageChanges().subscribe((porcentaje) => {
  //     this.porcentaje = Math.round(porcentaje);
  //     if (this.porcentaje == 100) {
  //       this.finalizado = true;
  //     }
  //   });

  //   referencia.getDownloadURL().subscribe((URL) => {
  //     this.URLPublica = URL;
  //     console.log(this.URLPublica);
  //   });
  // }

  onSubmit(){
    // Se asignan las rutas de los archivos al formulario
    this.formRegistroParking.value.images = this.uploadImages;
    this.formRegistroParking.value.poliza = this.uploadDocPoliza;
    this.formRegistroParking.value.comercio = this.uploadDocComercio;
    this.formRegistroParking.value.licencia = this.uploadDocLicencia;

    if(this.formRegistroParking.valid){
      // Encapsular los datos para ser enviados
      let data = {
        camara_comercio: this.formRegistroParking.value.comercio,
        constitucion_poliza: this.formRegistroParking.value.poliza,
        descripcion: this.formRegistroParking.value.solicitud,
        direccion: this.formRegistroParking.value.location,
        estado: 'Inactivo',
        horario: this.formRegistroParking.value.schedule,
        images: [
          this.formRegistroParking.value.images
        ],
        img: this.formRegistroParking.value.images,
        img1: this.formRegistroParking.value.images,
        img2: this.formRegistroParking.value.images,
        latitud: this.formRegistroParking.value.latitud,
        licencia_funcionamiento: this.formRegistroParking.value.licencia,
        longitud: this.formRegistroParking.value.longitud,
        nameParqueadero: this.formRegistroParking.value.name,
        tarifa: this.formRegistroParking.value.tarifa,
        telefono: this.formRegistroParking.value.telephone,
        ubicacion: this.formRegistroParking.value.municipio
      }

      this.firestoreService.createDocIdDefault('Parqueaderos', data).then( success => {
        this.formRegistroParking.reset();
        Swal.fire({
          title: '¡Tu registro fue exitoso!',
          icon: 'success',
          iconColor: '#1A97E8',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#1A97E8'
        })
      })

    } else{
      alert('El formulario no es válido');
    }
  }

}
