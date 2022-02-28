import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private log:AuthService){ }

  ngOnInit() {}

  logout(){
    console.log("logout")
    this.log.logout()
  }

}
