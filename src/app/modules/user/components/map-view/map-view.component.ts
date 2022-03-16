import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Map, Popup, Marker } from 'mapbox-gl';
import { MapsService, PlacesService } from 'src/app/services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements OnInit, AfterViewInit {

  // Obtener elemento local mapDiv
  @ViewChild('mapDiv') mapDivElement!: ElementRef

  constructor( private placesService: PlacesService, private mapService: MapsService ) { }

  ngOnInit() {}

  ngAfterViewInit(): void {

    if ( !this.placesService.userLocation ) throw Error('No hay placesServices.userLocation');
    
    // * Construcción del mapa
    const map = new Map({
      container: this.mapDivElement.nativeElement, // Referencia a elemento local
      style: 'mapbox://styles/mapbox/streets-v11', // URL estilos
      center: this.placesService.userLocation, // Posición inicial [lng, lat]
      zoom: 14 // Zoom inicial
    });

    // * Implementación de Popups
    const popup = new Popup()
      .setHTML(`
        <h6>Aquí estoy</h6>
        <span>Estoy en este lugar del mundo</span>
      `);

    // * Implementación del marcador
    new Marker({ color: 'red' })
      .setLngLat( this.placesService.userLocation )
      .setPopup( popup )
      .addTo( map );


    // * Inicializar el mapa
    this.mapService.setMap( map );

  }


}
