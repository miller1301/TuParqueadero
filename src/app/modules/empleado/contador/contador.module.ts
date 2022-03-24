import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContadorPageRoutingModule } from './contador-routing.module';

import { ContadorPage } from './contador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContadorPageRoutingModule
  ],
  declarations: [ContadorPage]
})
export class ContadorPageModule {}
