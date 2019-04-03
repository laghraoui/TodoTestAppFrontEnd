import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* 
  simple bean defining a structure of the response that we're expecting
*/
export class HelloWorldBean{
  constructor(
    private message: String
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeWelcomeBeanService(){

    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');

    /* it will return just the observable, the response isn't yet ready to appears !
    <HelloWorldBean> is the structure's kind of the data that we're expecting */
  }

  executeWelcomeBeanServiceWithParam(name){
  
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello/${name}`);
    
  }
}
