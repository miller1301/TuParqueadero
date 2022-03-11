import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfAutoPageRoutingModule } from './inf-auto-routing.module';

import { InfAutoPage } from './inf-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfAutoPageRoutingModule
  ],
  declarations: [InfAutoPage]
})
export class InfAutoPageModule {}
