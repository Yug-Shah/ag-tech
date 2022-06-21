import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserModel} from '../model/user.model';

@Injectable()
export class UserService {
  baseUrl = 'assets/config.json';
  constructor(private http: HttpClient) {}
  // var reqHeader = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   'Authorization': 'thisisteam1'
  // });
  // getConfig() {
  //   return this.http.get<UserModel>("${this.baseUrl}/url/path", {headers: reqHeader});
  // }
}
