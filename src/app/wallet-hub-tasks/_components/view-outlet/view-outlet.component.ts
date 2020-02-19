import {ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {AuthService} from '../../auth.service';
import {routerTransition} from '../../router-transition';

@Component({
  selector: 'app-view-outlet',
  templateUrl: './view-outlet.component.html',
  styleUrls: ['./view-outlet.component.scss'],
  animations: [routerTransition]
})
export class ViewOutletComponent implements OnInit {
  public useCssTransition: string;
  @ViewChild('templateref', {static: false}) public templateref: TemplateRef<any>;
  private animationState;

  constructor(private authService: AuthService, private cd: ChangeDetectorRef) {
    this.useCssTransition = 'off';
    this._isLoggedIn = false;
  }

  private _isLoggedIn: boolean;

  get isLoggedIn() {
    return this._isLoggedIn;
  }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(res => {
      this._isLoggedIn = res;
    });
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
