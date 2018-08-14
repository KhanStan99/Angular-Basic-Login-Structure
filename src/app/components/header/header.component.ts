import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginData: any = {};
  isUserLoggedIn: boolean = false;

  constructor(private cookieService: CookieService, private router: Router, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.loginData = this.cookieService.getObject('loginData');
    
    if (this.loginData)
      this.isUserLoggedIn = true;
    else
      this.isUserLoggedIn = false;

    this.ngAfterViewChecked();
  }

  ngOnChanges() {

  }

  logoutUser() {
    this.cookieService.removeAll();
    this.router.navigateByUrl('login');
    this.ngOnInit();
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }


}
