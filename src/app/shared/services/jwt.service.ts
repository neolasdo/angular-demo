import {Injectable} from '@angular/core';
import {User} from '../../member/user.model';

@Injectable()
export class JwtService {

  constructor() {
  }

  getUser(): Object {
    let user = localStorage.getItem('user');

    if (user !== 'undefined') {
      user = JSON.parse(user);
    }

    return user;
  }

  getToken(): String {
    const user = this.getUser();

    if (user) {
      return user['token'];
    }

    return '';
  }

  saveToken(user: Object) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  destroyToken() {
    localStorage.removeItem('user');
  }

}
