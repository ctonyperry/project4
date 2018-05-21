import { Component, OnInit } from '@angular/core';
import { User } from '../types/user'
import { UserService } from '../user.service';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.css']
})
export class EditUserFormComponent implements OnInit {

  getUserSubject = new Subject();
  updateUserSubject = new Subject();
  user: any;
  userId: any; 

  constructor(private userService: UserService, private route: ActivatedRoute) { 
    this.route.params.subscribe( params => this.userId = params.userId);
  }

  ngOnInit() {
    this.getUser()
  }

  getUser(){
    this.getUserSubject
    .subscribe(uid=>
        this.userService.getSingleUser(this.userId)
        .subscribe(response => this.user = response)
    )
    this.getUserSubject.next();
  }
  updateUser(){
    this.updateUserSubject
    .subscribe(uid=>
        this.userService.updateUser(this.user)
        .subscribe(response=>{                
               console.log(response)
        }         
        )
    )
    this.updateUserSubject.next();
  

  }

}



