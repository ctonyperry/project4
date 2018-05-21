import { AddUserFormComponent } from './../add-user-form/add-user-form.component';
import { AddUserComponent } from './../add-user/add-user.component';

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

  newUser: User  = new User(); 
  users: any;
  updateUserSubject = new Subject();
  addUserSubject = new Subject();
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
  enterEditMode(user){
    user.editing = true;
  }
  leaveEditMode(user){
    user.editing = false;
    this.updateUser(user);

  }
  cancelEditMode(user){
    user.editing = false;
  }
  updateUser(user){
    this.updateUserSubject
    .subscribe(uid=>
        this.userService.updateUser(user)
        .subscribe(response=>{                
               console.log(response)
        }         
        )
    )
    this.updateUserSubject.next();
  }

  updateAfterAddUser(){
    this.userSubject
    .subscribe(uid=>
        this.userService.getUsers()
        .subscribe(response => {
          this.users = response;
        })
    )
    this.getUsers();
  }

}
