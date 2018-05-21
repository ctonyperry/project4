import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  isHomeActive : any;
  isAddUserActive: any;
  constructor() { 
    this.isHomeActive='active';
  }

  ngOnInit() {
    
  }

  activateLink(linkName){
    switch(linkName){
      case "home":
      this.isHomeActive = 'active';
      this.isAddUserActive = '';

      break;

      case "adduser":
      this.isHomeActive = '';
      this.isAddUserActive = 'active';

      break;
    }
    
   
  }

}
