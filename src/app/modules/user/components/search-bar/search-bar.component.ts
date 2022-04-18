import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, IonRouterOutlet } from '@ionic/angular';
import { PlacesService } from 'src/app/services';
import { SearchResultsComponent } from '../search-results/search-results.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {

  private debounceTimer?: NodeJS.Timeout;

  constructor( private placesService: PlacesService, public routerOutlet: IonRouterOutlet ) { }
  
  ngOnInit() {}

  // Escucha de input de búsqueda
  onQueryChange( query: string = '' ){
    if( this.debounceTimer ) clearTimeout( this.debounceTimer );

    this.debounceTimer = setTimeout(() => {
      this.placesService.getPlacesByQuery(query);
    }, 350);
  }

}
