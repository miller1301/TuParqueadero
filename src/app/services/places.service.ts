import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  // Location de usuario
  userLocation?: [number, number];

  // Localización de usuario lista
  get isUserLocationReady(): boolean {
    return !!this.userLocation;
  }

  constructor() { 
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

}
