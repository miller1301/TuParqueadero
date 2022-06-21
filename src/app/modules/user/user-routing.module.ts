import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfiguracionCuentaPage } from './components/configuracion-cuenta/configuracion-cuenta.page';
import { CrudReservasComponent } from './components/crud-reservas/crud-reservas.component';
import { ParkingReadyComponent } from './components/parking-ready/parking-ready.component';
import { RegisterParkingComponent } from './components/register-parking/register-parking.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: 'user',
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
    },
    {
        path: 'configuracion',
        component: ConfiguracionCuentaPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})


export class UserRoutingModule {}