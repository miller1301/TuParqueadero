import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-reservas-g',
  templateUrl: './reservas-g.page.html',
  styleUrls: ['./reservas-g.page.scss'],
})
export class ReservasGPage implements OnInit {

  listareserva  = [];

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

        console.log(this.listareserva)
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

  createPdf(i){
    const pdfDefiniton: any ={
      watermark: { text: 'TuParqueadero', fontSize: 140, color: '#1A97E8',opacity: 0.3, bold: true, italics: false  },
      content: [
        {
          width: '100%',
          height: '30px',
          text: `Informe de TuParqueadero `, style: `titulo`
        },
        ,{
          text: `Informe dirigido al cliente ${this.listareserva[i].Nombre}`,
          style: 'espacio'
        },
        {
          text: `Telefono ${this.listareserva[i].telefono}`,
          style: 'espacio'
        },

        {
          text: `Hora de ingreso ${this.listareserva[i].Hora_de_ingreso}`,
          style: 'espacio'
        },
          
        {
          image: 'snow',
          width: 100,
          height: 100,
          alignment: 'center',
          lineHeight: 3
        },

        {
          text: `FELIZ VIAJE SEÑOR CONDUCT@R`,
          style: 'espacio',
          alignment: 'center'
        },
      

      ],
      images:{
        snow: 'https://cdn-icons-png.flaticon.com/512/2439/2439758.png'      },

      styles:{
        tex:{
          alignment: 'center',
          lineHeight: 2 
        },
        titulo:{
          alignment: 'center',
          lineHeight: 3,
          bold: true,
          fontSize: 25,
          color: '#1A97E8'
        },
        espacio:{
          lineHeight: 2,
          fontSize: 15
        },
        espacios:{
          lineHeight: 7
        },
        espaciot:{
          lineHeight: 3,
          fontSize: 12,
          alignment: 'justify'
        }
      }
    }
    //  Creacion del Pdf
    const pdf = pdfMake.createPdf(pdfDefiniton);
    //  Descarga del Pdf
    pdf.open();
  }

}
