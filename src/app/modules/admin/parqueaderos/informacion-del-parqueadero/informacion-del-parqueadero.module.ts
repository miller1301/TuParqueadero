import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionDelParqueaderoPageRoutingModule } from './informacion-del-parqueadero-routing.module';

import { InformacionDelParqueaderoPage } from './informacion-del-parqueadero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionDelParqueaderoPageRoutingModule
  ],
  declarations: [InformacionDelParqueaderoPage]
})
export class InformacionDelParqueaderoPageModule {}
