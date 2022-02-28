import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.page.html',
  styleUrls: ['./parqueadero.page.scss'],
})
export class ParqueaderoPage implements OnInit {

  constructor(private log:AuthService) { }

  ngOnInit() {
  }

  
  logout(){
    console.log("Logout")
    this.log.logout()
  }

}
