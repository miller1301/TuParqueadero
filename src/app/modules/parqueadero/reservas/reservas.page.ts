import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {

  listareserva = [];
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
  }

}
