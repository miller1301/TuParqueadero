import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudReservasComponent } from './components/crud-reservas/crud-reservas.component';
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
    },
    {
        path: 'mis-reservas',
        component: CrudReservasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})


export class UserRoutingModule {}