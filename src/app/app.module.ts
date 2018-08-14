import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from "./components/login/login.component";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthorizationInterceptor } from './auth/authorization.interceptor';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterModule.forRoot([
      {
        path: 'header',
        component: HeaderComponent,
      }, {
        path: 'login',
        component: LoginComponent,
      }, {
        path: 'dashboard',
        component: DashboardComponent
      }
    ])
  ],
  // exports: [MatButtonModule, MatCheckboxModule],
  providers: [CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
