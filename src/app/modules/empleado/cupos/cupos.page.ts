import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cupos',
  templateUrl: './cupos.page.html',
  styleUrls: ['./cupos.page.scss'],
})
export class CuposPage implements OnInit {

  constructor(private log:AuthService) { }

  ngOnInit() {
  }

  logout(){
    console.log("logout")
    this.log.logout()
  }

}
