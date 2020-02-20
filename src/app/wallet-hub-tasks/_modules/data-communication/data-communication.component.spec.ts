import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DataCommunicationComponent} from './data-communication.component';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MaterialInputModule} from './material-input/material-input.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('DataCommunicationComponent', () => {
  let component: DataCommunicationComponent;
  let fixture: ComponentFixture<DataCommunicationComponent>;
  let fb = new FormBuilder();

  let validators = {
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

  let communicationForm: FormGroup = fb.group({
    email: ['', validators.email],
    message: ['', validators.message],
    donation: ['', validators.donation]
  });


  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MaterialInputModule
      ],
      declarations: [DataCommunicationComponent]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create communicationForm', () => {
    component.communicationForm = communicationForm;
    expect(component.communicationForm).toBeTruthy();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
