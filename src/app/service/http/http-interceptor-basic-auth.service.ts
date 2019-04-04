import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(
    private basicAuthenticationService : BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    /* let username = 'mehdi'
    let password = '123'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password); */

    let basicAuthHeaderString = this.basicAuthenticationService.getAutheticatedToken();
    let username = this.basicAuthenticationService.getAutheticatedUser();
    if(basicAuthHeaderString && username) {
      request = request.clone({
        setHeaders : {
          Authorization : basicAuthHeaderString
        }
      })
    }
    
    /* the http interceptor acts like a filter. once we add the header, 
       we'd want the rest of the stuffto happen as usual
       So we invoke the next http handler and pass in to it the request
     */
    return next.handle(request)
  }
}
