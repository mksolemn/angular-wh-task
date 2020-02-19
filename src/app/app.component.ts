import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, ChangeDetectorRef,
  Component,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  TemplateRef,
  ViewChild, ViewEncapsulation
} from '@angular/core';
import {AuthService} from './wallet-hub-tasks/auth.service';
import {Router} from '@angular/router';
import {routerTransition} from './wallet-hub-tasks/router-transition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor() {

  }
}
