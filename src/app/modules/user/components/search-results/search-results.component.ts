import { Component, OnInit } from '@angular/core';
import { Feature } from 'src/app/interfaces/places';
import { MapsService, PlacesService } from 'src/app/services';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {

  public selectedId: string = '';

  constructor( private placesService: PlacesService, private mapService: MapsService ) { }

  ngOnInit() {}

  // Carga de los lugares buscados
  get isLoadingPlaces(): boolean {
    return this.placesService.isLoadingPlaces;
  }

  // Obtener los lugares desde el servicio
  get places(): Feature[] {
    return this.placesService.places;
  }

  // Ir al lugar seleccionado
  flyTo( place: Feature ) {
    this.selectedId = place.id;
    const [ lng, lat ] = place.center;
    this.mapService.flyTo({ lng, lat });
  }

  // Obtener ruta inicio y destino
  getDirections( place: Feature ) {

    if( !this.placesService.userLocation ) throw Error ('No hay userLocation');

    this.placesService.deletePlaces();

    const start = this.placesService.userLocation;
    const end = place.center as [number, number];

    this.mapService.getRouteBetweenPoints( start, end );
  }

}
