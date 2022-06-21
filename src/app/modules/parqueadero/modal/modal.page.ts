import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { getAuth, onAuthStateChanged } from '@angular/fire/auth'

import Swal from 'sweetalert2'
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @ViewChild("images", {
    read: ElementRef
  }) images: ElementRef;

  idUser: string;
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

    this.getDataUser();

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

  onSubmit(){
    // Se asignan las rutas de los archivos al formulario
    this.formRegistroParking.value.images = this.uploadImages;
    this.formRegistroParking.value.poliza = this.uploadDocPoliza;
    this.formRegistroParking.value.comercio = this.uploadDocComercio;
    this.formRegistroParking.value.licencia = this.uploadDocLicencia;

    if(this.formRegistroParking.valid){
      // Encapsular los datos para ser enviados
      let data = {
        idUser: this.idUser,
        camara_comercio: this.formRegistroParking.value.comercio,
        constitucion_poliza: this.formRegistroParking.value.poliza,
        descripcion: this.formRegistroParking.value.solicitud,
        direccion: this.formRegistroParking.value.location,
        estado: 'enRevision',
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
        console.log(success);
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