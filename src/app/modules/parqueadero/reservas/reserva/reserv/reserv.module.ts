import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservPageRoutingModule } from './reserv-routing.module';

import { ReservPage } from './reserv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservPageRoutingModule
  ],
  declarations: [ReservPage]
})
export class ReservPageModule {}
