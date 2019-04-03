import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  /* 
  the RouteGuardService enables us to check if the user is actually logged 
  in, before we can see the different routes
*/

  /* we inject the hardCodedAuthSrvc to know 
  if the user is logged in or not ! */
  constructor(
    private hardcodedAuthService: HardcodedAuthenticationService,
    private router: Router
  ) { }

  /* We would want to retun true, only if the user is logged in ! 
    we want to enable certain links only when a user is logged in
  */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedAuthService.isLoggedIn()) {
      return true;
    }
    //yla makanch mconnecte sifto l page dyal login
    this.router.navigate(['login'])
    return false;
  }

}
