import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

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
              private hardcodedAuthenticationService : HardcodedAuthenticationService,
              private basicAuthenticationService : BasicAuthenticationService        
    ) { }

  ngOnInit() {
  }

  /* handleLogin(){
    
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
        this.router.navigate(['welcome', this.username])
        this.statut = false
      } else{
      //this.router.navigate(['error'])
      this.statut = true
    }
  } */
  /* this is actually a synchronous call, what would happened in the case of a service call ?
     In the case of service call, we'd use observables => asynchronous call
     so we'd need to define the method to handle both the success and the failure*/  
    handleBasicAuthLogin(){
    
      this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
        .subscribe(
          /* if we're getting data back from the service OK valid call, otherwise invalid login*/
            data => {
              console.log(data)
              this.router.navigate(['welcome', this.username])
              this.statut = false
            },
            error => {
                console.log(error)
                this.statut = true
            }
        )
      }
}
