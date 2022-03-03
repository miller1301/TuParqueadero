import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParqueaderosPageRoutingModule } from './parqueaderos-routing.module';

import { ParqueaderosPage } from './parqueaderos.page';
import { MenuComponentModule } from '../menu/menu.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParqueaderosPageRoutingModule,
    MenuComponentModule
  ],
  declarations: [ParqueaderosPage]  
})
export class ParqueaderosPageModule {}
