import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN = 'basicHeaderToken'
export const AUTHENTICATED_USER = 'authenticatedUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http : HttpClient
  ) { }
    /* replaced with executeAuthenticationService */
  /* authenticate(username, password) {
      //console.log('before : ' + this.isLoggedIn());
    if (username === "mehdi" && password === '123') {
      sessionStorage.setItem('authenticatedUser', username)
      //console.log('after : ' + this.isLoggedIn());
      return true;
    }
    return false;
  } */

  executeAuthenticationService(username, password){
    /* we have created the basic auth string 
    and set it as a header in the call to the basic auth*/
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.http.get<AuthenticationBean>(
      `${API_URL}/basicauth`, {headers})
      /* if the service succeeds then do a specific thing throw pipe */
      .pipe(
        /* a pipe method allows us to declare what should be done if the request suceeds or if the requests fails.
           if there is a proper response coming back ! then map it */
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
          }
        )
      );
    
  }
  
  getAutheticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAutheticatedToken() {
    if (this.getAutheticatedUser())
    return sessionStorage.getItem(TOKEN)
  }

  isLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null);
  }

  logOut(){
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }
}

export class AuthenticationBean{
  constructor(
    public message : string
  ){}
}
