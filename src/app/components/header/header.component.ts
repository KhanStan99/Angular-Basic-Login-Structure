import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginData: any = {};

  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit() {
    this.loginData = this.cookieService.getObject('loginData');

  }

  ngOnChanges() {

  }

  logoutUser() {
    this.cookieService.removeAll();
    this.router.navigateByUrl('login');
  }

}
