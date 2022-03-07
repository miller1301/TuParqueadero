import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearEmpleadoPageRoutingModule } from './crear-empleado-routing.module';

import { CrearEmpleadoPage } from './crear-empleado.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearEmpleadoPageRoutingModule
  ],
  declarations: [CrearEmpleadoPage,MenuComponent]
})
export class CrearEmpleadoPageModule {}
