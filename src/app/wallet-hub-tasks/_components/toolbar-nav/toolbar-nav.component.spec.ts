import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolbarNavComponent } from './toolbar-nav.component';
import {MatIconModule, MatToolbarModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';

describe('ToolbarNavComponent', () => {
  let component: ToolbarNavComponent;
  let fixture: ComponentFixture<ToolbarNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarNavComponent ],
      imports:[MatToolbarModule, RouterTestingModule, MatIconModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have mat-toolbar element`, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-toolbar')).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
