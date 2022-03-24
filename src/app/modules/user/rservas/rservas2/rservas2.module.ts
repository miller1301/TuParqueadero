import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rservas2PageRoutingModule } from './rservas2-routing.module';

import { Rservas2Page } from './rservas2.page';
import { MenuComponent } from '../../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rservas2PageRoutingModule
  ],
  declarations: [Rservas2Page,MenuComponent]
})
export class Rservas2PageModule {}
