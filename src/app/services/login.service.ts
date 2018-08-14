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
  loginAPI: string = "YOUR_LOGIN_SERVICE";
  currenctGetApi: string = "https://currency-exchange.p.mashape.com/listquotes";


  login(loginData) {
    return this.httpClient.post(this.loginAPI, loginData).map((res: Response) => res);
  }

  getCurrencyList() {
    return this.httpClient.get(this.currenctGetApi).map((res: Response) => res);
  }

  getRatesFromCurrency(one, two, rate) {
    return this.httpClient.get('https://currency-exchange.p.mashape.com/exchange?from=' + one + '&q=' + rate + '&to=' + two).map((res: Response) => res);
  }

}
