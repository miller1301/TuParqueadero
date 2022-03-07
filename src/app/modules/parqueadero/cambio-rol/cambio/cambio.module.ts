import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambioPageRoutingModule } from './cambio-routing.module';

import { CambioPage } from './cambio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambioPageRoutingModule
  ],
  declarations: [CambioPage]
})
export class CambioPageModule {}
