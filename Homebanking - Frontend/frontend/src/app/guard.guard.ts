import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginserviceService } from './loginservice.service';

@Injectable({
  providedIn: 'root',
})
export class GuardGuard implements CanActivate {
  constructor(
    private loginService: LoginserviceService,
    private router: Router
  ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    // return true;

    const routerurl: string = state.url;
    return this.isLogin(routerurl);
  }

  isLogin(routerurl: string) {
    if (this.loginService.isLoggedIn()) {
      return true;
    }
    this.loginService.redirectUrl = routerurl;
    this.router.navigate(['/login'], { queryParams: { returnUrl: routerurl } });
  }
}
