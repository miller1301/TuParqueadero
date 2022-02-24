import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private log:AuthService) { }

  ngOnInit() {
  }

  logout(){
    console.log("Logout")
    this.log.logout()
  }
}
