import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParquePageRoutingModule } from './parque-routing.module';

import { ParquePage } from './parque.page';
import { MenuComponent } from '../../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParquePageRoutingModule
  ],
  declarations: [ParquePage,MenuComponent]
})
export class ParquePageModule {}
