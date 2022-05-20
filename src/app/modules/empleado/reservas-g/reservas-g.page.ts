import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservas-g',
  templateUrl: './reservas-g.page.html',
  styleUrls: ['./reservas-g.page.scss'],
})
export class ReservasGPage implements OnInit {

  listareserva = [];

  constructor(private firestore: FirestoreService) { 
    
  }

  

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

  // Modal del Boton 
  showModal(){
    Swal.fire({
      title: 'RESERVA FINALIZADA',
      text: 'Genere el Recibo',
      icon: 'success'
      
    })
  }

}
