import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operators';
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {   
      // return this.authService.isAuthenticated.subscribe(
      //   (authenticated) => {          
      //     if (!authenticated) {
      //       this.router.navigateByUrl('/members/login');
      //       return false;
      //     }

      //     return true;
      //   }
      // );

       
    let user = this.authService.isLoggedIn();  
         
    if (!user) {
      this.router.navigateByUrl('/members/login');
      return false; 
    }

    return true;
  }
}
