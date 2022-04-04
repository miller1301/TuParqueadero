import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkingReadyComponent } from './components/parking-ready/parking-ready.component';
import { RegisterParkingComponent } from './components/register-parking/register-parking.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'llegada',
        component: ParkingReadyComponent
    },
    {
        path: 'register-parking',
        component: RegisterParkingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})


export class UserRoutingModule {}