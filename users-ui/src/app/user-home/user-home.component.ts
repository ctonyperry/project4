import { ToiletSearchComponent } from './../toilet-search/toilet-search.component';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ToiletSearchComponent } from './../toiletsearch.service';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private userService: UserService, private route: ActivatedRoute) { 
    this.route.params.subscribe( params => this.userId = params.userId);
  }

  userId: number;
  user: any;
  userSubject =new Subject();

  ngOnInit() {
    this.userSubject
    .subscribe(uid=>
        this.userService.getSingleUser(this.userId)
        .subscribe(response => {
          this.user = response;
        })
    )
    this.getUser();
  }

  getUser(){
    this.userSubject.next();

  }

}
