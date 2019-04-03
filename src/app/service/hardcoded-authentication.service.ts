import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
      //console.log('before : ' + this.isLoggedIn());
    if (username === "mehdi" && password === '123') {
      sessionStorage.setItem('authenticatedUser', username)
      //console.log('after : ' + this.isLoggedIn());
      return true;
    }
    return false;
  }

  isLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null);
  }

  logOut(){
    sessionStorage.removeItem('authenticatedUser')
  }
}
