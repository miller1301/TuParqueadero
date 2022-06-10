import { Component, OnInit } from '@angular/core';

// Importación de servicios
import { MapsService, PlacesService } from 'src/app/services';
import { AuthService } from 'src/app/services/auth.service';
import { MapViewComponent } from '../components/map-view/map-view.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(
    private log: AuthService, 
    private placesServices: PlacesService, 
    public mapService: MapsService,
    private mapViewComponent: MapViewComponent
    ) { }

  ngOnInit() {
    document.getElementById('menu-user').style.display="block";
  }

  logout(){
    console.log("Logout")
    this.log.logout()
  }

  // Localización de usuario lista
  get isUserLocationReady() {
    return this.placesServices.isUserLocationReady;
  }

  resetMap(){
    this.mapService.routeReady = false;
    this.mapViewComponent.makeMapInitial();
  }

}
