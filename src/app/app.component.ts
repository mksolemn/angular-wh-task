import {Component} from '@angular/core';
import {AuthService} from './wallet-hub-tasks/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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

}
