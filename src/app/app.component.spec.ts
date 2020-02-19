import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {MaterialInputModule} from './wallet-hub-tasks/data-communication/material-input/material-input.module';
import {MatDividerModule, MatFormFieldModule, MatIconModule, MatListModule, MatToolbarModule} from '@angular/material';
import {OnChangesModule} from './wallet-hub-tasks/on-changes/on-changes.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MaterialInputModule,
        MatToolbarModule,
        MatDividerModule,
        MatListModule,
        MatIconModule,
        MatFormFieldModule,
        OnChangesModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have mat-toolbar element`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-toolbar')).toBeTruthy();
  });
});
