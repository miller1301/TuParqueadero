import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {

  listareserva = [];
  listareserva2 = [];
  constructor(private firestore: FirestoreService) { }

  ngOnInit() {
    this.firestore.getAll('ReservasL').then(parkres =>{
      parkres.subscribe(listareservaRef =>{
        
        this.listareserva = listareservaRef.map(parkref=>{
          let reservas=parkref.payload.doc.data();
          reservas['id']=parkref.payload.doc.id;
          return reservas;
        });


      });
    });
    this.firestore.getAll('reservas').then(parkres =>{
      parkres.subscribe(listareservaReff =>{
        
        this.listareserva2 = listareservaReff.map(parkreff=>{
          let reservas1=parkreff.payload.doc.data();
          reservas1['id']=parkreff.payload.doc.id;
          return reservas1;
        });


      });
    });
  }

}
