import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import {User} from './../types/user';


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [UserService]
})
export class NavBarComponent implements OnInit {
user:any;

  constructor(private activatedRoute: ActivatedRoute) {}
  
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.user);
}
}
  
