import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private cookieService: CookieService) { }

  invalidLoginDetails: boolean = false;
  loginData: any = {};
  loginResponse: any;
  isApiHit: boolean = false;

  ngOnInit() {

  }

  loginUser(loginDetails) {
    console.log(loginDetails.value);
    this.loginService.login(loginDetails.value).subscribe(
      (data: any) => {
        this.isApiHit = true;
        this.loginResponse = JSON.stringify(data);
        console.log(this.loginResponse);
        this.invalidLoginDetails = false; //logged in
        this.router.navigateByUrl('home');
        this.cookieService.putObject('loginData', this.loginResponse);
      }, error => {
        this.invalidLoginDetails = true; //logged in
        this.isApiHit = true;
        console.log('error', error);
      }
    )
  }


}



