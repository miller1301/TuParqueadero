import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private log:AuthService) { }

  ngOnInit() {}

  logout(){
    console.log("Logout")
    this.log.logout()
  }
}
