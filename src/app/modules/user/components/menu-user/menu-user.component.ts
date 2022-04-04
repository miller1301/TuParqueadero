import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.scss'],
})
export class MenuUserComponent implements OnInit {

  constructor( private menuController: MenuController ) { }

  ngOnInit() {}

  openMenu() {
    this.menuController.open();
  }

}
