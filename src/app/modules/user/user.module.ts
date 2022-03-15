import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './components/loading/loading.component';
import { RouterModule } from '@angular/router';
import { MapViewComponent } from './components/map-view/map-view.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoadingComponent,
    MapViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ]
})
export class UserModule {}
