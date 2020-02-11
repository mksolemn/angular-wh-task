import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-data-communication',
  templateUrl: './data-communication.component.html',
  styleUrls: ['./data-communication.component.scss']
})
export class DataCommunicationComponent implements OnInit {
  communicationForm: FormGroup;
  validators;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.validators = {
      email: Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i),
      message: Validators.required,
      donation: Validators.required
    };
  }

  ngOnInit() {
    this.communicationForm = this.fb.group({
      email: ['', this.validators.email],
      message: ['', this.validators.message],
      donation: ['', this.validators.donation]
    });
  }

  onSubmit() {
    this.authService.communicatedData.next(this.communicationForm.value);
  }

}
