import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {CustomerService} from './customer.service';

//CanActivate interface that a class can implement to be a guard deciding if a route can be activated.
// If all guards return true, navigation will continue. If any guard returns false, navigation will be cancelled. 
@Injectable()
export class NeedAuthGuard implements CanActivate {
 
  constructor(private customerService: CustomerService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const redirectUrl = route['_routerState']['url'];
    // check if user is logged in.
    if (this.customerService.isLogged()) {
      return true;
      // logged in so return true
    }
    // not logged in so redirect to login page with the return url
    this.router.navigateByUrl(
      this.router.createUrlTree(['/login'], {queryParams: {redirectUrl}})
    );

    return false;
    // logged in so return true
  }
}