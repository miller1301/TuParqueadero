import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Implementación de mapbox
import Mapboxgl from 'mapbox-gl';
 
Mapboxgl.accessToken = 'pk.eyJ1IjoibWlsbGVyMTMwMSIsImEiOiJjbDBzczZ2NnUwZHYzM2txdTFnemc0a2l4In0.zQ3ZDg9aZZvi8g1d3-ljnw';



if ( !navigator.geolocation ) {
  alert('Navegador no soporta la geolocalización');
  throw new Error('Navegador no soporta la geolocalización');
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
