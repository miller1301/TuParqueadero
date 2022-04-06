import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelogPageRoutingModule } from './relog-routing.module';

import { RelogPage } from './relog.page';
import { MenuComponent } from '../../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelogPageRoutingModule
  ],
  declarations: [RelogPage,MenuComponent]
})
export class RelogPageModule {}
