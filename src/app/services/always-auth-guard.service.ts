import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './Login.service';
import { pipe } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlwaysAuthGuardService implements CanActivate {

  constructor(private login: LoginService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      console.log('AlwaysAuthGuad');
      console.log(route);
      console.log(state.url);
      console.log('AlwaysAuthGuad');
      return this.login.isLoggedIn() ? true : false;
    }
}
