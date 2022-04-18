import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservPageRoutingModule } from './reserv-routing.module';

import { ReservPage } from './reserv.page';
import { MenuComponent } from '../../../menu/menu.component';

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
