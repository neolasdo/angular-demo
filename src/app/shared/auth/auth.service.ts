import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { ApiService } from '../services/api.service';
import { JwtService } from '../services/jwt.service';
import { User } from '../../member/user.model';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import * as moment from "moment";

@Injectable()
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(private jwtService: JwtService, private apiService: ApiService) { }

  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
  populate() {
    // If JWT detected, attempt to get & store user's info
    let loggedInUser: any = this.jwtService.getUser();
    
    if (loggedInUser) {
      this.apiService.get(`/members/${loggedInUser.id}`)
      .subscribe(
        data => {
          const user: User = {
            id: data.id,
            email: data.email,
            token: loggedInUser.token,
            first_name: '',
            last_name: '',
            is_admin: true
          };
          this.setSession(user)
        },
        err => this.logout()
      );
    } else {
      // Remove any potential remnants of previous auth states
      this.logout();
    }
  }

  login(email:string, password:string ): Observable<User> {        
    return this.apiService.post('/members/login', {email, password})
      .pipe(map(
      data => {        
        if (data.hasOwnProperty('error')) {
          
        } else {
          const user: User = {
            id: data.id,
            email: email,
            token: data.accessToken,
            first_name: '',
            last_name: '',
            is_admin: true
          };

          this.setSession(user);          
        }
        
        return data;
      }
    ));
  }
        
  private setSession(user) {
    //const expiresAt = moment().add(user.expiresIn,'second');

    // Save JWT sent from server in localstorage
    this.jwtService.saveToken(user);
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
      // localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }          

  logout() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next({} as User);
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
    //localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
      //return moment().isBefore(this.getExpiration());
      let token = this.jwtService.getToken();

      if (token !== '' && token !== null) {
        return true;
      }

      return false;
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }
}
