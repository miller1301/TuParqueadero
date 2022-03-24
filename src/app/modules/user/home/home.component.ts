import { Component, OnInit } from '@angular/core';

// Importación de servicios
import { PlacesService } from 'src/app/services';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private log: AuthService, private placesServices: PlacesService) { }

  ngOnInit() {}

  logout(){
    console.log("Logout")
    this.log.logout()
  }

  // Localización de usuario lista
  get isUserLocationReady() {
    return this.placesServices.isUserLocationReady;
  }

}
