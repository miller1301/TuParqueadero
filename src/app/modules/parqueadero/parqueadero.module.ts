import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParqueaderoPageRoutingModule } from './parqueadero-routing.module';

import { ParqueaderoPage } from './parqueadero.page';
import { ReservPageModule } from './reservas/reserva/reserv/reserv.module';
import { ReservasPageModule } from './reservas/reservas.module';
import { ParHomePageModule } from './par-home/par-home.module';
import { EditHomePageModule } from './edit-home/edit-home.module';
import { CrudPageModule } from './crud/crud.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ParqueaderoPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParqueaderoPageRoutingModule,
    ReservPageModule,
    ReservasPageModule,
    ParHomePageModule,
    EditHomePageModule,
    CrudPageModule,
    RouterModule
  ],
})
export class ParqueaderoPageModule {}