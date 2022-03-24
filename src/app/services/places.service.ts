import { Injectable } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
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

  constructor( private placesApi: PlacesApiClient, private mapService: MapsService, private geolocation: Geolocation ) { 
    this.getUserLocation();
  }

  // Obtener la localización del usuario
  public getUserLocation(){
    this.geolocation.getCurrentPosition().then( (resp) => {
      this.userLocation = [resp.coords.longitude, resp.coords.latitude];
    }).catch((error) => {
      console.log('Error getting location', error);
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
        proximity: this.userLocation.join(','),
      }
    })
      .subscribe( res => {
        this.isLoadingPlaces = false;
        this.places = res.features;
        console.log(this.places);
        this.mapService.createMarkersFromPlaces( this.places, this.userLocation );
      });

  }

  // Borrar lugares buscados
  deletePlaces() {
    this.places = [];
  }

}
