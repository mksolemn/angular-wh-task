import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewOutletComponent} from './view-outlet.component';
import {MatIconModule, MatListModule, MatToolbarModule} from '@angular/material';
import {ToolbarNavComponent} from '../toolbar-nav/toolbar-nav.component';
import {MainNavComponent} from '../main-nav/main-nav.component';
import {RouterTestingModule} from '@angular/router/testing';
import {OnChangesModule} from '../../_modules/on-changes/on-changes.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('ViewOutletComponent', () => {
  let component: ViewOutletComponent;
  let fixture: ComponentFixture<ViewOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewOutletComponent, ToolbarNavComponent, MainNavComponent],
      imports: [RouterTestingModule, OnChangesModule, MatIconModule, MatToolbarModule, MatListModule, NoopAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
