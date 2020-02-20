import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth.service';

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
      email: [
        Validators.required,
        Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
      ],
      message: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ],
      donation: [
        Validators.required,
        Validators.min(1),
        Validators.max(999999999)
      ]
    };
  }

  ngOnInit() {
    this.communicationForm = this.fb.group({
      email: ['', this.validators.email],
      message: ['', this.validators.message],
      donation: [1001, this.validators.donation]
    });
  }

  onSubmit() {
    this.authService.communicatedData.next(this.communicationForm.value);
  }

}
