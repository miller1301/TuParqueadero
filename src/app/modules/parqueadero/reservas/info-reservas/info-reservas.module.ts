import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoReservasPageRoutingModule } from './info-reservas-routing.module';

import { InfoReservasPage } from './info-reservas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoReservasPageRoutingModule
  ],
  declarations: [InfoReservasPage]
})
export class InfoReservasPageModule {}
