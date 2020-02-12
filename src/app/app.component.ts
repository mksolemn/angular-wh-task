import {Component} from '@angular/core';
import {AuthService} from './wallet-hub-tasks/auth.service';
import {Router, RouterOutlet} from '@angular/router';
import {routerAnimation} from './wallet-hub-tasks/router-animation/router-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerAnimation]
})
export class AppComponent {
  public loggedIn: boolean;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  logout() {
    this.loggedIn = false;
    this.router.navigate(['/']);
  }

  prepareRoute(outlet: RouterOutlet) {
  debugger;
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
