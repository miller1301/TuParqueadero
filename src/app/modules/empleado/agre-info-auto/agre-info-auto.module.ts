// importaciones angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgreInfoAutoPageRoutingModule } from './agre-info-auto-routing.module';

import { AgreInfoAutoPage } from './agre-info-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgreInfoAutoPageRoutingModule
  ],
  declarations: [AgreInfoAutoPage]
})
export class AgreInfoAutoPageModule {}
