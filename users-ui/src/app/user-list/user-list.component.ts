
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators'
import { User } from '../types/user'

import { Observable } from 'rxjs'
//import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {

  users: any;
  userSubject = new Subject();
  deleteUserSubject = new Subject();
  private userToDelete; 
  editing: boolean =false;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userSubject
    .subscribe(uid=>
        this.userService.getUsers()
        .subscribe(response => {
          this.users = response;
        })
    )

    // this.deleteUserSubject
    // .subscribe(uid=>
    //     this.userService.deleteUser(user.id)
    //     .subscribe(response=>{                
    //       let index = this.users.indexOf(this.userToDelete );
    //       this.users.splice(index, 1);   
    //       this.getUsers();       
    //     }         
    //     )
    //)

    this.getUsers();

  }

  deleteUser(userId){

    this.userService.deleteUser(userId).toPromise().then(resp=>{
      console.log(resp);
      this.userSubject.next();
    });
    //this.deleteUserSubject.next();
  }
  getUsers(){
    this.userService.getUsers();

    this.userSubject.next();
    
  }
  enterEditMode(){
    this.editing = true;
    console.log('editmode');

  }
  leaveEditMode(){
    this.editing = false;

  }
}
