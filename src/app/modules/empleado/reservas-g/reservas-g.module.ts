import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservasGPageRoutingModule } from './reservas-g-routing.module';

import { ReservasGPage } from './reservas-g.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservasGPageRoutingModule
  ],
  declarations: [ReservasGPage]
})
export class ReservasGPageModule {}
