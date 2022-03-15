import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements OnInit {

  constructor( private placesService: PlacesService ) { }

  ngOnInit() {}

}
