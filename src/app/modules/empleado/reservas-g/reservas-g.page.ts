import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2';
import pdfMake from 'pdfmake/build/pdfMake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


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
      text: 'Espere su recibo',
      icon: 'success'
      
    })
  }

  createPdf(){

    const pdfDefinition: any = {
      content: [
        {
          text:'Factura Tuparqueadero',
          style: 'tex'
        },
        {
          text:'Datos del usuario',
          style:'text'
        },
        {
          ul:[
            'nombres completos'
            
          ]
        }
      ]

    }

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
  }

}
