import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature, PlacesResponse } from '../interfaces/places';

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

  constructor( private http: HttpClient ) { 
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
    // TODO : Evaluar cuando el query es nulo o undefined

    this.isLoadingPlaces = true;

    this.http.get<PlacesResponse>(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?proximity=-74.22108914663625%2C4.712416285374488&types=place%2Cpostcode%2Caddress%2Cpoi&language=es&access_token=pk.eyJ1IjoibWlsbGVyMTMwMSIsImEiOiJjbDBzczZ2NnUwZHYzM2txdTFnemc0a2l4In0.zQ3ZDg9aZZvi8g1d3-ljnw`)
      .subscribe( res => {
        console.log(res.features);
        this.isLoadingPlaces = false;
        this.places = res.features;
      })
  }

}
