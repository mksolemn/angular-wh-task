import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {MaterialInputModule} from './wallet-hub-tasks/_modules/data-communication/material-input/material-input.module';
import {MatFormFieldModule, MatIconModule, MatListModule, MatToolbarModule} from '@angular/material';
import {OnChangesModule} from './wallet-hub-tasks/_modules/on-changes/on-changes.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MainNavComponent} from './wallet-hub-tasks/_components/main-nav/main-nav.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MaterialInputModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatFormFieldModule,
        OnChangesModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MainNavComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
