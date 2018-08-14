import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { CookieService } from 'angular2-cookie/core';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currencyList: any;
  firstCurrency: string;
  secondCurrency: string;
  answer: string;
  constructor(
    private router: Router,
    private cookieService: CookieService,
    private service: LoginService,
    private headerComponent: HeaderComponent
  ) { }

  ngOnInit() {

    this.headerComponent.ngOnInit();

    console.log("JSON ==> ", this.cookieService.getObject('loginData'));

    if (this.cookieService.getObject('loginData')) {
      this.service.getCurrencyList().subscribe(
        (data: any) => {          
          this.currencyList = data;
        }, error => {
          console.log('error', error);
        }
      );
    }
    else {
      console.log
      this.router.navigateByUrl('login');
    }

  }

  onSelect1(deviceValue) {
    console.log(deviceValue);
    this.firstCurrency = deviceValue;
  }

  onSelect2(deviceValue) {
    console.log(deviceValue);
    this.secondCurrency = deviceValue;
  }

  checkRates(value) {
    console.log(value);
    this.service.getRatesFromCurrency(this.firstCurrency, this.secondCurrency, value).subscribe(
      (data: any) => {
        console.log("DATA==>", data);
        this.answer = data.toString();
      }, error => {
        console.log('error', error);
      }
    );
  }

}
