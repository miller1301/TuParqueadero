import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InforeservaPageRoutingModule } from './inforeserva-routing.module';

import { InforeservaPage } from './inforeserva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InforeservaPageRoutingModule
  ],
  declarations: [InforeservaPage]
})
export class InforeservaPageModule {}
