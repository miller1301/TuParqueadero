import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss'],
})
export class DatosComponent implements OnInit {

  constructor(private popoverController : PopoverController) { }

  ngOnInit() {}

  onClick( valor ){
    console.log(valor)
    this.popoverController.dismiss({
      valor
    })
  }

}
