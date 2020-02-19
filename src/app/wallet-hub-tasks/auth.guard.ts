import {Injectable} from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree, Router
} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  private _isLoggedIn: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this._isLoggedIn = false;
    this.authService.isLoggedIn.subscribe(res => {
      this._isLoggedIn = res;
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._isLoggedIn) {
      return this._isLoggedIn;
    } else {
      this.router.navigate(['/']);
    }

  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
