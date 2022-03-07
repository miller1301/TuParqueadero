import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion-del-parqueadero',
  templateUrl: './informacion-del-parqueadero.page.html',
  styleUrls: ['./informacion-del-parqueadero.page.scss'],
})
export class InformacionDelParqueaderoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  activo: string = 'Activo';
  color = 'success';

  onClick(){
    this.activo === 'Activo' ?
      (this.activo = 'Inactivo', this.color = 'danger')
      : 
      (this.activo = 'Activo', this.color = 'success'); 
  }
}