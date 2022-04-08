import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  

  ngOnInit() {
    // this.getDataUser();

    // this.formReserva = this.formBuilder.group({
    //   time: ['', [Validators.required]],
    //   hour: ['', [Validators.required]],
    //   vehicle: ['', [Validators.required]],
    //   placa: ['', [Validators.required]],
    //   marca: ['', [Validators.required]]
    // });
  }
  
  }

  // parqueadero : Parqueaderos[] = [];

  // id: string;

  // private path = "Parqueaderos/";

  // constructor(
  //   public firestoreService:FirestoreService,
  //   public auth: AngularFireAuth, 
  //   private authh: AuthService,
  //   private router:Router, 
  //   ) { }

    
  // async rParquedero(){
  //   console.log("Datos", this.datosp)
  //   const res = await this.authh.registrarPar(this.datosp)
  //   .then( async res => {
  //     console.log('Exito al crear el parqueadero');
  //     const path = 'Parqueaderos';
  //     const id = res.user.uid;
  //     this.datosp.uid = id;
  //     await this.firestoreService.createDoc(this.datosp, path, id)
  //     this.router.navigate(['/parqueadero']);
  //   }).catch( error => console.log(error))
  // }

