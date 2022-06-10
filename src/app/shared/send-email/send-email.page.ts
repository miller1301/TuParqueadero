import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.page.html',
  styleUrls: ['./send-email.page.scss'],
  providers: [AuthService]
})
export class SendEmailPage implements OnInit {

  public user$: Observable<any> = this.authService.authfirebase.user

  constructor( private authService: AuthService ) { }

  ngOnInit() {
    document.getElementById('menu-user').style.display="none";
  }
  onSendEmail(){
    this.authService.sendVerificationEmail();
  }

}
