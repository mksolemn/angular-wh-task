import {AfterContentChecked, Component, OnInit, Renderer2, TemplateRef, ViewChild} from '@angular/core';
import {AuthService} from './wallet-hub-tasks/auth.service';
import {Router} from '@angular/router';
import {routerTransition} from './wallet-hub-tasks/router-transition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition],
})
export class AppComponent implements OnInit, AfterContentChecked {
  public loggedIn: boolean;
  public userCssTransition: boolean;
  @ViewChild('templateref', {static: false}) public templateref: TemplateRef<any>;
  private animationState;

  constructor(private authService: AuthService,
              private router: Router) {
    this.userCssTransition = false;
  }

  ngOnInit(): void {

  }

  ngAfterContentChecked(): void {
    this.userCssTransition = (this.animationState === 'cssTransition');
  }

  logout() {
    this.loggedIn = false;
    this.router.navigate(['/']);
  }

  getState(outlet) {
  debugger;
    console.log('State: ', outlet.activatedRouteData);
    this.animationState = outlet.activatedRouteData.state;
    return outlet.activatedRouteData.state;
  }

}
