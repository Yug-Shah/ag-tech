import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserModel} from '../model/user.model';
import {Observable} from 'rxjs';


@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getProfile(): Observable<UserModel>{
    // TODO: Change the token to pool user data dynamically: getting token/user as an arg
    const baseUrl = 'http://localhost:8000';
    const reqHeader = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Token 42ffdb80863e2e256184b2390172f5a8699ec098');

    return this.http.get<UserModel>(baseUrl + '/user/get_profile', {headers: reqHeader});
  }
}
