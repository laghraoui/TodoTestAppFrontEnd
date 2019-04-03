import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'mehdi'
  password = ''

  errorMessage = 'username or password error try again'
  statut = false

  //router
  //dependency injection
  //Angular.giveMeRouter()
  constructor(private router : Router, 
              private hardcodedAuthenticationService : HardcodedAuthenticationService          
    ) { }

  ngOnInit() {
  }

  handleLogin(){
    //if(this.username === "mehdi" && this.password === '123'){
      if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
        this.router.navigate(['welcome', this.username])
        this.statut = false
      } else{
      //this.router.navigate(['error'])
      this.statut = true
    }
  }
}
