import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/services';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {


  constructor(private log: AuthService, private placesServices: PlacesService) { }

 
  ngOnInit() {}

  logout(){
    console.log("Logout")
    this.log.logout()
  }

  // Localización de usuario lista
  get isUserLocationReady() {
    return this.placesServices.isUserLocationReady;
  }
}
