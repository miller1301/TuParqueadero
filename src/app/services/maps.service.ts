import { Injectable } from '@angular/core';
import { LngLatLike, Map } from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  private map?: Map;

  get isMapReady() {
    return !!this.map;
  }

  constructor() { }

  // Obtener y asignar mapa
  setMap( map: Map ) {
    this.map = map;
  }

  // Mover o deplazar mapa
  flyTo( coords: LngLatLike ) {
    if( !this.isMapReady ) throw Error ('El mapa no está inicializado');

    this.map.flyTo({
      zoom: 14,
      center: coords
    });
  }

}
