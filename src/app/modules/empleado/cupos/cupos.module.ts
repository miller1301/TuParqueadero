import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuposPageRoutingModule } from './cupos-routing.module';

import { CuposPage } from './cupos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuposPageRoutingModule
  ],
  declarations: [CuposPage]
})
export class CuposPageModule {}
