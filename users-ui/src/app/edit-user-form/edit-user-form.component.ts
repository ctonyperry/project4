import { Component, OnInit } from '@angular/core';
import { User } from '../types/user'
import { UserService } from '../user.service';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.css']
})
export class EditUserFormComponent implements OnInit {

  userSubject = new Subject();
  user: any;
  userId: any; 

  constructor(private userService: UserService, private route: ActivatedRoute) { 
    this.route.params.subscribe( params => this.userId = params.userId);
  }

  ngOnInit() {
    this.getUser()
  }

  getUser(){
    this.userSubject
    .subscribe(uid=>
        this.userService.getSingleUser(this.userId)
        .subscribe(response => this.user = response)
    )
    this.userSubject.next();
  }

}
