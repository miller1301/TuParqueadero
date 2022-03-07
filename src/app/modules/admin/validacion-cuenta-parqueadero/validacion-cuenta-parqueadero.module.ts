import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidacionCuentaParqueaderoPageRoutingModule } from './validacion-cuenta-parqueadero-routing.module';

import { ValidacionCuentaParqueaderoPage } from './validacion-cuenta-parqueadero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidacionCuentaParqueaderoPageRoutingModule
  ],
  declarations: [ValidacionCuentaParqueaderoPage]
})
export class ValidacionCuentaParqueaderoPageModule {}
