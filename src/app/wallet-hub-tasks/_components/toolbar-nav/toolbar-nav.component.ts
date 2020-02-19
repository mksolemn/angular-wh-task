import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-toolbar-nav',
  templateUrl: './toolbar-nav.component.html',
  styleUrls: ['./toolbar-nav.component.scss']
})
export class ToolbarNavComponent implements OnInit {
  public loggedIn: boolean;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit():void {
  }

  logout() {
    this.loggedIn = false;
    this.router.navigate(['/']);
  }

}
