import { Component, OnInit } from '@angular/core';

import {  AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''
  messageNomads =''
  errorNomads =''

  messageParam =''
  errorParam=''


  constructor(private route : ActivatedRoute,
              private service: WelcomeDataService) { }

  ngOnInit() {

    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMsg(){
    /* it will return just the observable, the response isn't yet ready to appears !
    console.log(this.service.executeWelcomeBeanService());
       it doesn't really invoke the service until somebody subscribe ! */
    
      this.service.executeWelcomeBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );   
  }
    getWelcomeMsgWithParam(){
    
        this.service.executeWelcomeBeanServiceWithParam(this.name).subscribe(
                              responseParam => this.handleSuccessfulResponseWithParam(responseParam),
                              errorParam => this.handleErrorResponseWithParam(errorParam));
  
  }

  handleSuccessfulResponse(response){
    this.messageNomads = response.message
    /* console.log(response)
    console.log(response.message) */
  } 

  handleErrorResponse(error){
    this.errorNomads = error.message
    /* console.log(response)
    console.log(response.message) */
  }

  handleSuccessfulResponseWithParam(responseParam){
    this.messageParam = responseParam.message
  } 

  handleErrorResponseWithParam(errorParam){
    this.errorParam = errorParam.message
  }
}
