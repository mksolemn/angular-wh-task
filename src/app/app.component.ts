import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, ChangeDetectorRef,
  Component,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {AuthService} from './wallet-hub-tasks/auth.service';
import {Router} from '@angular/router';
import {routerTransition} from './wallet-hub-tasks/router-transition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition],
})
export class AppComponent {
  public loggedIn: boolean;
  public useCssTransition: string;
  @ViewChild('templateref', {static: false}) public templateref: TemplateRef<any>;
  private animationState;

  constructor(private authService: AuthService,
              private router: Router,
              private cd: ChangeDetectorRef) {
    this.useCssTransition = 'off';
  }

  logout() {
    this.loggedIn = false;
    this.router.navigate(['/']);
  }

  getState(outlet) {
    const activeState = outlet.activatedRouteData.state;
    if (this.animationState !== activeState) {
      this.animationState = activeState;
      this.useCssTransition = (this.animationState === 'cssTransition') ? 'on' : 'off';
      this.cd.detectChanges();
    }
    return activeState;
  }

}
