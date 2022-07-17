import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private http: HttpClient) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // this.http.get<boolean>('/api/isLogin').pipe(
    //   map((result: any) => {
    //     if (result.isLogin) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   })
    // );
    if (!localStorage.getItem('apikey')) {
      return this.router.parseUrl('/login?returnUrl=' + state.url);
    } else {
      return true;
    }
  }
}
