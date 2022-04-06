import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoListaPageRoutingModule } from './info-lista-routing.module';

import { InfoListaPage } from './info-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoListaPageRoutingModule
  ],
  declarations: [InfoListaPage]
})
export class InfoListaPageModule {}
