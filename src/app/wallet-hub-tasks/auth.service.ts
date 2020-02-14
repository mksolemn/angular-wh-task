import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {CommunicationForm} from './_data/communication-form';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public communicatedData: BehaviorSubject<CommunicationForm> = new BehaviorSubject<CommunicationForm>(null);

  constructor() { }
}
