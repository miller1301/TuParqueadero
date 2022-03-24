import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Insc2PageRoutingModule } from './insc2-routing.module';

import { Insc2Page } from './insc2.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Insc2PageRoutingModule
  ],
  declarations: [Insc2Page,MenuComponent]
})
export class Insc2PageModule {}
