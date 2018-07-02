import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Login } from 'src/app/components/login/model';
import { CookieService } from 'angular2-cookie/core';
import { HeaderComponent } from 'src/app/components/header/header.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private cookieService: CookieService) {}

  invalidLoginDetails: boolean = false;
  loginData: any = {};
  loginResponse: any;
  isApiHit: boolean = false;
  list: Login[] = [];

  ngOnInit() {

  }

  loginUser(loginDetails) {
    console.log(loginDetails.value);
    this.loginService.login(loginDetails.value).subscribe(
      (data: any) => {
        this.isApiHit = true;
        this.loginResponse = JSON.stringify(data);
        console.log(this.loginResponse);
        if (this.loginResponse == "null") {
          this.invalidLoginDetails = true; //failed          
        } else {
          this.invalidLoginDetails = false; //logged in          
        }
        // this.router.navigateByUrl('header');
        var login = { "isLoggedIn": this.invalidLoginDetails };
        this.cookieService.putObject('isLoggedIn', login);
      }
    )
  }


}



