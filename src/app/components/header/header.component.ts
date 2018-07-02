import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginData: any;
  isUserLoggedIn: boolean = false;

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
   this.loginData =  this.cookieService.getObject('isLoggedIn');
   this.isUserLoggedIn =  this.loginData.isLoggedIn;
  }

  ngOnChanges() {

  }

  changes(varr) {
    this.isUserLoggedIn = varr;
  }

}
