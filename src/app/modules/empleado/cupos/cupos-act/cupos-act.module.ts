import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuposActPageRoutingModule } from './cupos-act-routing.module';

import { CuposActPage } from './cupos-act.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuposActPageRoutingModule
  ],
  declarations: [CuposActPage]
})
export class CuposActPageModule {}
