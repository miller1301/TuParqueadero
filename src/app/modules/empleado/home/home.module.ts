import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeComponentRoutingModule} from './home-routing.module';

import { HomeComponent} from './home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeComponentRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeComponentModule {}
