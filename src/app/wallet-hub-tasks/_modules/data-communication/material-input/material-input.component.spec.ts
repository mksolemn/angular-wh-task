import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MaterialInputComponent} from './material-input.component';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormatCurrencyDirective} from '../../../_directives/format-currency.directive';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('MaterialInputComponent', () => {
  let component: MaterialInputComponent;
  let fixture: ComponentFixture<MaterialInputComponent>;
  let inputElement: HTMLElement;
  let fb = new FormBuilder();

  let validators = {
    email: [
      Validators.required,
      Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
    ]
  };

  let commForm: FormGroup = fb.group({
    email: ['', validators.email]
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MaterialInputComponent,
        FormatCurrencyDirective
      ],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialInputComponent);
    component = fixture.componentInstance;
    component.formRefs = {formGr: commForm, formCtrlName: 'email'};
    inputElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should have mat-form-field element', () => {
    inputElement.querySelector('mat-form-field');
    expect(inputElement).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
