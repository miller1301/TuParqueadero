import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReserUserPageRoutingModule } from './reser-user-routing.module';

import { ReserUserPage } from './reser-user.page';
import { MenuComponent } from '../../../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReserUserPageRoutingModule
  ],
  declarations: [ReserUserPage,MenuComponent]
})
export class ReserUserPageModule {}
