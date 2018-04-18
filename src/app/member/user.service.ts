import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { ApiService } from '../shared/services/api.service';
import { User } from './user.model';

@Injectable()
export class UserService {
  
  constructor(private apiService: ApiService) { }

  all() {
    return this.apiService.get('/members');
  }

  get(id): Observable<User> {
    return this.apiService.get('/members/' + id)
      .pipe(map(data => data));
  }
}
