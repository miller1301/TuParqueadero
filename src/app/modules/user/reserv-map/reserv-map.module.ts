import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservMapPageRoutingModule } from './reserv-map-routing.module';

import { ReservMapPage } from './reserv-map.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservMapPageRoutingModule
  ],
  declarations: [ReservMapPage,MenuComponent]
})
export class ReservMapPageModule {}
