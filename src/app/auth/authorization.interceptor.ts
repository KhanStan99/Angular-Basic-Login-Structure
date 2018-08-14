import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpHeaders,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { CookieService } from 'angular2-cookie/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';


@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

    mashapeeKey: string = 'BAMk9OiWjumshF05bish12Cs6m0op1xwU84jsnwmKcT1fjfFAs';

    constructor(private cookieService: CookieService) {
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            headers: request.headers.set('X-Mashape-Key', this.mashapeeKey)
        });

        return next.handle(request).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                console.log("Error in:", err);
            }
        });
    }
}
