
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ToiletSearchService } from './../toiletsearch.service';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
  providers: [ToiletSearchService]
})
export class UserHomeComponent implements OnInit {

  constructor(private userService: UserService, private route: ActivatedRoute, private toiletSearchService: ToiletSearchService) { 
    this.route.params.subscribe( params => this.userId = params.userId);
  }

  results: any;
  userId: number;
  user: any;
  userSubject =new Subject();
  toiletSearchSubject = new Subject();

  borough: any;

  ngOnInit() {
    this.userSubject
    .subscribe(uid=>
        this.userService.getSingleUser(this.userId)
        .subscribe(response => {
          this.user = response;
        })
    )
    this.getUser();

    this.toiletSearchSubject
    .subscribe(uid=>
        this.toiletSearchService.getToilets(this.borough)
        .subscribe(response => {
          this.results = response;
        })
    )
  }

  getUser(){
    this.userSubject.next();

  }

  getList(borough){

    this.borough = borough;
    this.toiletSearchSubject.next();

  }
}
