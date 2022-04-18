import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovedadPageRoutingModule } from './novedad-routing.module';

import { NovedadPage } from './novedad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovedadPageRoutingModule
  ],
  declarations: [NovedadPage]
})
export class NovedadPageModule {}
