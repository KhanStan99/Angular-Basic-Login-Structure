import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  loginAPI: string = "http://139.162.25.196:3000/api/ScoraUsers/login";

  login(loginData) {
    return this.httpClient.post(this.loginAPI, loginData).map((res: Response) => res);
  }

}
