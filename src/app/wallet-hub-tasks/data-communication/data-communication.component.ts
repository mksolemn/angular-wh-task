import {Component, OnInit} from '@angular/core';
import {EmailValidator, FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-data-communication',
  templateUrl: './data-communication.component.html',
  styleUrls: ['./data-communication.component.scss']
})
export class DataCommunicationComponent implements OnInit {
  communicationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    const validators = {
      email: Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i),
      message: Validators.required,
      donation: Validators.required
    };

    this.communicationForm = this.fb.group({
      email: ['', validators.email],
      message: ['', validators.message],
      donation: ['', validators.donation]
    });

    console.log(this.communicationForm.controls);

  }

  ngOnInit() {

  }

}
