import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionUsuarioPageRoutingModule } from './informacion-usuario-routing.module';

import { InformacionUsuarioPage } from './informacion-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionUsuarioPageRoutingModule
  ],
  declarations: [InformacionUsuarioPage]
})
export class InformacionUsuarioPageModule {}
