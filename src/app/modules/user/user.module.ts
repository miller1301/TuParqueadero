import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './components/loading/loading.component';
import { RouterModule } from '@angular/router';
import { MapViewComponent } from './components/map-view/map-view.component';
import { BtnMyLocationComponent } from './components/btn-my-location/btn-my-location.component';
import { TuParqLogoComponent } from './components/tu-parq-logo/tu-parq-logo.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { InfoParkingComponent } from './components/info-parking/info-parking.component';
import { BookingParkingComponent } from './components/booking-parking/booking-parking.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoadingComponent,
    MapViewComponent,
    BtnMyLocationComponent,
    TuParqLogoComponent,
    SearchBarComponent,
    SearchResultsComponent,
    InfoParkingComponent,
    BookingParkingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule {}
