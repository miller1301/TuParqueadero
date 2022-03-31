import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RLocalPageRoutingModule } from './r-local-routing.module';

import { RLocalPage } from './r-local.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RLocalPageRoutingModule
  ],
  declarations: [RLocalPage]
})
export class RLocalPageModule {}
