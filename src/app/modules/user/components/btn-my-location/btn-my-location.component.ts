import { Component, OnInit } from '@angular/core';
import { MapsService, PlacesService } from 'src/app/services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.scss'],
})
export class BtnMyLocationComponent implements OnInit {

  constructor( private mapService: MapsService, private placesService: PlacesService ) { }

  ngOnInit() {}

  // Ir a mi ubicación
  goToMyLocation(){
    // Validar que la ubicación de usuario y el mapa estén disponibles
    if( !this.placesService.isUserLocationReady ) throw Error ('No hay ubicación de usuario');
    if( !this.mapService.isMapReady ) throw Error ('No hay mapa disponible');

    this.mapService.flyTo(this.placesService.userLocation!);
  }

}
