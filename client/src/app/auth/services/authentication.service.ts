import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  _url = `${environment.endUrl}/auth`;
  constructor(private _http: HttpClient) { }

  getUser() {
    let user = localStorage.getItem('user');
    return user;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  login(authDetails): Observable<any> {
    // return of({
    //   name: 'Rahul Raiyani',
    //   email: 'rahul@gmail.com',
    //   contact: '9876789072',
    //   token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    // });
    return this._http.post<any>(`${this._url}/login`, authDetails);
  }

  register(userDetails): Observable<any> {
    // return of({ ...userDetails,
    //   password: undefined,
    //   token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    // });
    return this._http.post<any>(`${this._url}/signup`, userDetails);
  }
}
