import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditHomePageRoutingModule } from './edit-home-routing.module';

import { EditHomePage } from './edit-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditHomePageRoutingModule
  ],
  declarations: [EditHomePage]
})
export class EditHomePageModule {}
