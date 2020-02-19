import {TestBed, inject} from '@angular/core/testing';
import {AuthGuard} from './auth.guard';
import {AuthService} from './auth.service';

describe('AuthGuardGuard', () => {

  let authGuard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard]
    });
    authGuard = TestBed.get(AuthService);
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });
});
