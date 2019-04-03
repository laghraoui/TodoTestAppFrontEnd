import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private hardcodedAuthService : HardcodedAuthenticationService
  ) { }
    // isLoggedIn: boolean = false;
  /* 
    yla 7atena service f ngOnInit
    Menu Component ghadi y t initialisa gher marra wahda ! 
    f chargement dyal la page ola yla refreshenaha manually
    ghadi nebqaw 9adren bach nchufo links wakha ndero clear l session storage
  */
  ngOnInit() {
    //this.isLoggedIn = this.hardcodedAuthService.isLoggedIn();
  }
     /* dakchi 3la f directive if f page html ghadi n3ayto niichan 
    3la service li injectena hna 'fl construct'  */
}
