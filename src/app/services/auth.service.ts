import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject, Observable, map } from 'rxjs';
import { IAuthResponse } from './shared/helpers/interfaces/IAuthResponse';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../environments/environment';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private readonly base = environment.apiURL;
  private readonly LOGIN_URL: string = 'Auth/Login';
  private readonly LOGOUT_URL: string = 'Auth/Logout';
  private readonly USER_REGISTER: string = 'Auth/Create';

  // public loggedIn!: BehaviorSubject<boolean>;

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService, private cookieService: CookieService,) { 
  }

  authentication(authForm: any): Observable<IAuthResponse> {
    
    return this.http.post<any>(`${this.base}${this.LOGIN_URL}`, authForm);
  }
  // createUser(userModel: User): Observable<any> {
  //   return this.http.post<User>(`${this.base}${this.USER_REGISTER}`, userModel);
  // }
  

  // logout process
  logout(email: string): Observable<IAuthResponse> {
    return this.http.post<any>(`${this.base}${this.LOGOUT_URL}`, {email: email});
  }

  isAuth() {
    return this.cookieService.get('token') && !this.jwtHelper.isTokenExpired(this.cookieService.get('token'));
  }
}
