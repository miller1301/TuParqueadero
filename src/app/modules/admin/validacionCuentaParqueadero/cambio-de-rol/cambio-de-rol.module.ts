import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambioDeRolPageRoutingModule } from './cambio-de-rol-routing.module';

import { CambioDeRolPage } from './cambio-de-rol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambioDeRolPageRoutingModule
  ],
  declarations: [CambioDeRolPage]
})
export class CambioDeRolPageModule {}
