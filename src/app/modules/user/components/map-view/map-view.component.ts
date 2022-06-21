import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Map, Popup, Marker } from 'mapbox-gl';
import { DirectionsApiClient } from 'src/app/api';
import { MapsService, PlacesService } from 'src/app/services';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InfoParkingComponent } from '../info-parking/info-parking.component';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements OnInit, AfterViewInit {

  public parqueaderosDisponibles: any[] = [];
  public markers: Marker[] | any = [];

  // Obtener elemento local mapDiv
  @ViewChild('mapDiv') mapDivElement!: ElementRef

  constructor( 
    private placesService: PlacesService, 
    private mapService: MapsService,
    private firestoreService: FirestoreService,
    public modalController: ModalController
  ) { }

  ngOnInit() {}

  ngAfterViewInit(): void {

    setTimeout(() => {
      this.makeMapInitial();
    }, 1800);
    
  }

  // Creación de mapa y marcador inicial
  makeMapInitial(){
    if ( !this.placesService.userLocation ) throw Error('No hay placesServices.userLocation');
    
    // Construcción del mapa
    const map = new Map({
      container: this.mapDivElement.nativeElement, // Referencia a elemento local
      style: 'mapbox://styles/mapbox/streets-v11', // URL estilos
      center: this.placesService.userLocation, // Posición inicial [lng, lat]
      zoom: 14 // Zoom inicial
    });

    // Implementación de Popups
    const popup = new Popup()
      .setHTML(`
        <h6>Aquí estoy</h6>
        <span>Estoy en este lugar del mundo</span>
      `);


    // Implementación del marcador
    new Marker({ color: 'red' })
      .setLngLat( this.placesService.userLocation )
      .setPopup( popup )
      .addTo( map );

    // Inicializar el mapa
    this.mapService.setMap( map );

    // Obtener parqueaderos
    this.getParkings('Parqueaderos');
  }

  // Obtener los parqueaderos disponibles
  getParkings(document: string){
    this.firestoreService.getAllDocs(document).subscribe( parqueaderos => {
      parqueaderos.forEach( (parkData: any) => {
        if( parkData.payload.doc.data().estado == 'Activo' ){
          this.parqueaderosDisponibles.push({
            id: parkData.payload.doc.id,
            data: parkData.payload.doc.data()
          });
        }
      });
      this.createMarkersFromParkings();
    });
  }

  // Crear marcadores de parqueaderos disponibles
  createMarkersFromParkings(){

    const markersParkings = [];
    
    for (const parking of this.parqueaderosDisponibles) {
      let { latitud, longitud  } = parking
      // Crear popup
      const popup = new Popup()
        .setHTML(`
          <h1>${parking.data.nameParqueadero}</h1>
          <button class="btn btn-sm btn-primary mt-3" id="btn-ruta">Información</button>
        `)
        // Popup abierto
        .on('open', () => {
          console.log([Number(latitud), Number(longitud)]);
          document.getElementById('btn-ruta').addEventListener('click', () => {
            this.presentModal(parking);
          });
        });

      // Crear marcador 
      const newMarker = new Marker({color: 'orange'})
        .setLngLat([parking.data.longitud, parking.data.latitud])
        .setPopup( popup )
        .addTo( this.mapService.map );

      markersParkings.push( newMarker );
    }

    for (let i = 0; i < this.parqueaderosDisponibles.length; i++) {
      this.markers.push(markersParkings[i]);
    }
  }

  // Abrir modal info parqueadero y enviar datos de parqueadero
  async presentModal(parking) {
    console.log(parking);
    const modal = await this.modalController.create({
      component: InfoParkingComponent,
      cssClass: 'modal-info-parking',
      componentProps: {
        parking
      }
    });
    return await modal.present();
  }


}
