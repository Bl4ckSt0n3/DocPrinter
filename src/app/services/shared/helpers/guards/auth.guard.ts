import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  const token = cookieService.get('token');
  const router: Router = inject(Router);
  const jwtHelper: JwtHelperService = inject(JwtHelperService);
  
  if (token && !jwtHelper.isTokenExpired(token)) {
    // jwtHelper.decodeToken(token)
    //router.createUrlTree(['pages/products']); // it is a data structure that provides some utilities like Router.navigate
    return true;
  }
  router.createUrlTree(['auth']);
  return false;
};
