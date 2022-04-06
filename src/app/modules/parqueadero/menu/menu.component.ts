import { Component, OnInit } from '@angular/core';

// Importación de servicios
import { PlacesService } from 'src/app/services';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

<<<<<<<< HEAD:src/app/modules/parqueadero/menu/menu.component.ts
  constructor(private log:AuthService) { }
========
  constructor(private log: AuthService, private placesServices: PlacesService) { }
>>>>>>>> ac13f600b4750f99e2e21d71fdb92d13d525589e:src/app/modules/user/home/home.component.ts

  ngOnInit() {}

  logout(){
    console.log("Logout")
    this.log.logout()
  }
<<<<<<<< HEAD:src/app/modules/parqueadero/menu/menu.component.ts
========

  // Localización de usuario lista
  get isUserLocationReady() {
    return this.placesServices.isUserLocationReady;
  }

>>>>>>>> ac13f600b4750f99e2e21d71fdb92d13d525589e:src/app/modules/user/home/home.component.ts
}
