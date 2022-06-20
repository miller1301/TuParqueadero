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
import { ParkingReadyComponent } from './components/parking-ready/parking-ready.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { MenuUserComponent } from './components/menu-user/menu-user.component';
import { RegisterParkingComponent } from './components/register-parking/register-parking.component';
import { CrudReservasComponent } from './components/crud-reservas/crud-reservas.component';
import { EditReservComponent } from './components/crud-reservas/edit-reserv/edit-reserv.component';
import { LogoAppComponent } from './components/logo-app/logo-app.component';

// Importaciones Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

// NGXTimePicker
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

// NG Prime
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { BadgeModule } from 'primeng/badge';
import { ConfiguracionCuentaPageModule } from './components/configuracion-cuenta/configuracion-cuenta.module';



@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    LoadingComponent,
    MapViewComponent,
    BtnMyLocationComponent,
    TuParqLogoComponent,
    SearchBarComponent,
    SearchResultsComponent,
    InfoParkingComponent,
    BookingParkingComponent,
    ParkingReadyComponent,
    MenuUserComponent,
    RegisterParkingComponent,
    CrudReservasComponent,
    EditReservComponent,
    LogoAppComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    IonicModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    NgxMaterialTimepickerModule,
    TableModule,
    ButtonModule,
    RatingModule,
    BadgeModule,
    ConfiguracionCuentaPageModule
  ],
  providers: [
    MapViewComponent
  ],
  exports: [MenuUserComponent]
})
export class UserModule {}