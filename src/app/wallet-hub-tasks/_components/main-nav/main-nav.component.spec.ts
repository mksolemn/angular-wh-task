import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainNavComponent} from './main-nav.component';
import {MatIconModule, MatListModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';

describe('MainNavComponent', () => {
  let component: MainNavComponent;
  let fixture: ComponentFixture<MainNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainNavComponent],
      imports: [MatListModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
