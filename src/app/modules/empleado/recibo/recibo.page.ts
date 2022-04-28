import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfMake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-recibo',
  templateUrl: './recibo.page.html',
  styleUrls: ['./recibo.page.scss'],
})
export class ReciboPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createPdf(){

    const pdfDefinition: any = {
      content: [
        {
          text:'Tuparqueadero'
          
          
        }
      ]

    }

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
  }

}
