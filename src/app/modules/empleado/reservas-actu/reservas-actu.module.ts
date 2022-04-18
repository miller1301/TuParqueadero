import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservasActuPageRoutingModule } from './reservas-actu-routing.module';

import { ReservasActuPage } from './reservas-actu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservasActuPageRoutingModule
  ],
  declarations: [ReservasActuPage]
})
export class ReservasActuPageModule {}
