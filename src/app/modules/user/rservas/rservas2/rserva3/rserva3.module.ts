import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rserva3PageRoutingModule } from './rserva3-routing.module';

import { Rserva3Page } from './rserva3.page';
import { MenuComponent } from '../../../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rserva3PageRoutingModule
  ],
  declarations: [Rserva3Page,MenuComponent]
})
export class Rserva3PageModule {}
