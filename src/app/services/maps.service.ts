import { Injectable } from '@angular/core';
import { AnySourceData, LngLatBounds, LngLatLike, Map, Marker, Popup } from 'mapbox-gl';
import { DirectionsApiClient } from '../api';
import { DirectionsResponse, Route } from '../interfaces/directions';
import { Feature } from '../interfaces/places';
import { FirestoreService } from './firestore.service';

import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  public map?: Map;
  public userLocation?: [number, number];
  private markers: Marker[] | any = [];
  public positionRealTime?: [number, number];
  public routeReady: boolean = false;
  public resetMap: boolean;


  get isMapReady() {
    return !!this.map;
  }

  constructor( private directionsApi: DirectionsApiClient, private geolocation: Geolocation ) {
    this.getUserLocation();
    this.getUserLocationLive();
  }

  // Obtener y asignar mapa
  setMap( map: Map ) {
    this.map = map;
  }

  // Ubicación inicial del usuario
  public getUserLocation(){
    this.geolocation.getCurrentPosition().then( (resp) => {
      this.userLocation = [resp.coords.longitude, resp.coords.latitude];
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  // Obtener localización en realtime
  public getUserLocationLive(){
    let watch = this.geolocation.watchPosition();
    watch.subscribe( (data: GeolocationPosition) => {
      this.positionRealTime = [data.coords.longitude, data.coords.latitude];
    });
  }


  // Mover o deplazar mapa
  flyTo( coords: LngLatLike ) {
    if( !this.isMapReady ) throw Error ('El mapa no está inicializado');

    this.map.flyTo({
      zoom: 14,
      center: coords
    });
  }



  // Crear marcadores de los lugares buscados
  createMarkersFromPlaces( places: Feature[], userLocation: [number, number] ) {
    
    if( !this.map ) throw Error ('Mapa no inicializado');

    // Recorrer marcadores
    this.markers.forEach( marker => marker.remove() );
    const newMarkers = [];

    // Obtener lugares
    for (const place of places) {
      
      const [ lng, lat ] = place.center;
      
      // Crear popup
      const popup = new Popup()
        .setHTML(`
          <h6>${ place.text }</h6>
          <span>${ place.place_name }</span>
          <button class="btn btn-sm btn-primary mt-3" id="btn-ruta">Direcciones</button>
        `)

        // Popup abierto
        .on('open', () => {
          console.log(place.center);
          document.getElementById('btn-ruta').addEventListener('click', () => {
            this.getRouteBetweenPoints(this.userLocation, place.center);
          });
        });

      // Crear marcador 
      const newMarker = new Marker()
        .setLngLat({ lng, lat })
        .setPopup( popup )
        .addTo( this.map );

      newMarkers.push( newMarker );
    }

    this.markers = newMarkers;

    if ( places.length === 0 ) return;

    // Límites del mapa
    const bounds = new LngLatBounds();
    newMarkers.forEach( marker => bounds.extend(marker.getLngLat()));
    bounds.extend( userLocation );
    this.map.fitBounds(bounds, {
      padding: 200
    })
  }


  // Obtener ruta inicio y destino
  getRouteBetweenPoints( start: [number, number], end: [number, number] | number[] ) {
  
    this.directionsApi.get<DirectionsResponse>(`/${start.join(',')};${end.join(',')}`)
      .subscribe( resp => {
        this.drawPolyline( resp.routes[0] );
      });

  }

  // Trazar línea de ruta
  drawPolyline( route: Route ) {

    console.log({ kms: route.distance / 1000, duration: route.duration / 60 });

    if( !this.map ) throw Error ('Mapa no inicializado');

    const coords = route.geometry.coordinates;
    const bounds = new LngLatBounds();

    coords.forEach( ([lng, lat]) => {
      bounds.extend([lng, lat]);
    });

    this.map.fitBounds( bounds, {
      padding: 200
    });

    // Dibujar línea
    const sourceData: AnySourceData = {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: coords
            }
          }
        ]
      }
    }

    if( this.map.getLayer('RouteString') ){
      this.map.removeLayer('RouteString');
      this.map.removeSource('RouteString');
    }

    this.map.addSource('RouteString', sourceData);

    this.map.addLayer({
      id: 'RouteString',
      type: 'line',
      source: 'RouteString',
      layout: {
        'line-cap': 'round',
        'line-join': 'round'
      },
      paint: {
        'line-color': 'black',
        'line-width': 3
      }
    });

  }

  removePoline(layer: string){
    this.map.removeLayer(layer);
  }

}
