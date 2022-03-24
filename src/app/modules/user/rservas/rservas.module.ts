import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RservasPageRoutingModule } from './rservas-routing.module';

import { RservasPage } from './rservas.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RservasPageRoutingModule
  ],
  declarations: [RservasPage,MenuComponent]
})
export class RservasPageModule {}
