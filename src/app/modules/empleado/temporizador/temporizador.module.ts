import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemporizadorPageRoutingModule } from './temporizador-routing.module';

import { TemporizadorPage } from './temporizador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemporizadorPageRoutingModule
  ],
  declarations: [TemporizadorPage]
})
export class TemporizadorPageModule {}
