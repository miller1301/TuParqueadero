import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-poppover-info',
  templateUrl: './poppover-info.component.html',
  styleUrls: ['./poppover-info.component.scss'],
})
export class PoppoverInfoComponent implements OnInit {

  constructor(
    private popoverController : PopoverController
  ) { }

  ngOnInit() {}


  onClick( valor ){
    console.log(valor)
    this.popoverController.dismiss({
      valor
    })
  }
}
