import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParqueaderoPageRoutingModule } from './parqueadero-routing.module';

import { ParqueaderoPage } from './parqueadero.page';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParqueaderoPageRoutingModule
  ],
  declarations: [ParqueaderoPage,MenuComponent]
})
export class ParqueaderoPageModule {}
