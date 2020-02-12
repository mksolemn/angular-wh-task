import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {CommunicationForm} from '../communication-form';
import {routerAnimation} from '../router-animation/router-animation';

@Component({
  selector: 'app-guarded-route',
  templateUrl: './guarded-route.component.html',
  styleUrls: ['./guarded-route.component.scss']
})
export class GuardedRouteComponent implements OnInit {
  constructor(private authService: AuthService) {
  }

  private _messageData: CommunicationForm;

  get messageData(): CommunicationForm {
    return this._messageData;
  }


  ngOnInit() {
    this.authService.communicatedData
      .subscribe(res => {
        console.log('Guarded message: ', res);
        this._messageData = res;
      });
  }

}
