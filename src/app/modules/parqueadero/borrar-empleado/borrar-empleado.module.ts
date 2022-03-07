import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BorrarEmpleadoPageRoutingModule } from './borrar-empleado-routing.module';

import { BorrarEmpleadoPage } from './borrar-empleado.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BorrarEmpleadoPageRoutingModule
  ],
  declarations: [BorrarEmpleadoPage,MenuComponent]
})
export class BorrarEmpleadoPageModule {}
