import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './../types/user';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {

  users: Array<any>;
  listUserSubject = new Subject();
  newUserList: Array<any>;
  deleteUserSubject = new Subject;
  userId: number; 

  constructor(private userService: UserService) { 

  }

  ngOnInit() {
    this.listUserSubject.subscribe(()=>{
      this.userService.getUsers().subscribe(response=>{
        this.users = (response as Array<any>).sort(function(a,b){
          return a.id - b.id;
        }).sort(function (a,b){
          return a.id - b.id;
        });
      })
    })
    this.listUserSubject.next();
    this.deleteUserSubject.subscribe(userId=>{
      this.userService.deleteUser(userId).subscribe(res=>{
        console.log(JSON.stringify(res));
      })
    });

  }
  handleDelete(userId){

    let indexOfDeletedItem = this.users.map(function(e) { return e.id; }).indexOf(userId);    
    this.newUserList = Array.from(this.users);
    this.users = this.newUserList.filter(user=>{return user.id != userId});   
    this.deleteUserSubject.next(userId);
  }

}
