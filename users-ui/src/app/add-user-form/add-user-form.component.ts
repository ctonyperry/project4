import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../types/user'
import { UserService } from '../user.service';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'



@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {
  @Output() addUserEvent = new EventEmitter<string>();

  callParent() {
    this.addUserEvent.emit('updated users');
  }

  user={
    userName:null,
    firstName: null, 
    lastName: null,
    email: null
  };

  addUserSubject = new Subject();

  constructor(private userService: UserService, private router: Router) { 

  }

  ngOnInit() {


  }

  addUser(user){
    this.addUserSubject
    .subscribe(uid=>
        this.userService.addUser(user)
        .subscribe(response=>{                  
        }         
        )
    )
    this.addUserSubject.next();
    this.callParent(); 

    this.router.navigateByUrl('');

  }



}
