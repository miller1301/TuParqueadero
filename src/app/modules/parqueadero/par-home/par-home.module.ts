import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParHomePageRoutingModule } from './par-home-routing.module';

import { ParHomePage } from './par-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParHomePageRoutingModule
  ],
  declarations: [ParHomePage]
})
export class ParHomePageModule {}
