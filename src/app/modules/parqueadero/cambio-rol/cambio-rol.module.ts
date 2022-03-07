import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambioRolPageRoutingModule } from './cambio-rol-routing.module';

import { CambioRolPage } from './cambio-rol.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambioRolPageRoutingModule
  ],
  declarations: [CambioRolPage,MenuComponent]
})
export class CambioRolPageModule {}
