import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-parking',
  templateUrl: './register-parking.component.html',
  styleUrls: ['./register-parking.component.scss'],
})
export class RegisterParkingComponent implements OnInit {

  formRegistroParking: FormGroup;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {

    this.formRegistroParking = this.formBuilder.group({
      name: ['', [Validators.required]],
      location: ['', [Validators.required]],
      schedule: ['', [Validators.required]],
      tarifa: ['', [Validators.required]],
      socialMedia: ['', [Validators.required]]
    });

  }

  onSubmit(){

  }

}
