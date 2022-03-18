import { Injectable } from '@angular/core';
import { PlacesApiClient } from '../api';
import { Feature, PlacesResponse } from '../interfaces/places';
import { MapsService } from './maps.service';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public userLocation?: [number, number];
  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];

  // Localización de usuario lista
  get isUserLocationReady(): boolean {
    return !!this.userLocation;
  }

  constructor( private placesApi: PlacesApiClient, private mapService: MapsService ) { 
    this.getUserLocation();
  }

  // Obtener la localización del usuario
  public async getUserLocation(): Promise<[number, number]> {
    return new Promise( (resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        // Desectructuramos el objeto y resolvemos la promesa
        ({ coords }) => {
          this.userLocation = [coords.longitude, coords.latitude ];
          console.log(this.userLocation);
          resolve( this.userLocation );
        },
        // Atrapar el error
        ( err ) => {
          alert('No se pudo obtener la geolocalización');
          console.log(err);
          reject();
        }
      );
    });
  }


  // Obtener lugares por query
  getPlacesByQuery( query: string = '' ){

    if( query.length === 0 ) {
      this.places = [];
      this.isLoadingPlaces = false;
      return;
    }

    if( !this.userLocation ) throw Error ('No hay userLocation');

    this.isLoadingPlaces = true;

    this.placesApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: this.userLocation.join(',')
      }
    })
      .subscribe( res => {
        this.isLoadingPlaces = false;
        this.places = res.features;
        this.mapService.createMarkersFromPlaces( this.places, this.userLocation );
      });

  }

  // Borrar lugares buscados
  deletePlaces() {
    this.places = [];
  }

}
