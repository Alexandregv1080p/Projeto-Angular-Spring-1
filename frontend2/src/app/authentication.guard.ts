import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    const url = route.url.join('/'); 

    if (url === 'login') { 
      return true;
    }

    const token = sessionStorage.getItem('token');

    if (!token) {
      return this.router.parseUrl('/login');
    }

    return true;
  }
}
