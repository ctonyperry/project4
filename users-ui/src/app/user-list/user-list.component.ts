
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators'
import { User } from '../types/user'

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
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();

  }

  deleteUser(user){
    this.deleteUserSubject
    .subscribe(uid=>
        this.userService.deleteUser(user.id)
        .subscribe(response=>{                
          let index = this.users.indexOf(this.userToDelete );
          this.users.splice(index, 1);   
          this.getUsers();       
        }         
        )
    )
    this.deleteUserSubject.next();
  }
  getUsers(){
    this.userSubject
    .subscribe(uid=>
        this.userService.getUsers()
        .subscribe(response => this.users = response)
    )
    this.userSubject.next();
  }
}
