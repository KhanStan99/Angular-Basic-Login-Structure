import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginData: any = {};
  constructor(private cookieService: CookieService, private header: HeaderComponent) { }

  ngOnInit() {
    this.loginData = this.cookieService.getObject('loginData');
    this.header.ngOnInit();
  }

}
