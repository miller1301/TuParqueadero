import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private log:AuthService, private menu: MenuController){ }

  ngOnInit() {}

  logout(){
    console.log("logout")
    this.log.logout()
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}
