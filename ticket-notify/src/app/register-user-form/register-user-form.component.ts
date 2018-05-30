import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Subject, pipe } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { User } from './../types/user';


@Component({
  selector: 'app-register-user-form',
  templateUrl: './register-user-form.component.html',
  styleUrls: ['./register-user-form.component.css'],
  providers: [UserService]
})
export class RegisterUserFormComponent implements OnInit {

  userNameIsTaken = false;
  addUserSubject = new Subject();
  checkUsernameSubject = new Subject();
  user = new User();
  constructor(private userService: UserService) { }
  hide: any;

  ngOnInit() {

    this.checkUsernameSubject
      .pipe(debounceTime(500))
      .subscribe(success => {
        this.userService.getByUserName(this.user.userName).subscribe(response => {
          if (response == null) {
            this.userNameIsTaken = false;
          } else {
            this.userNameIsTaken = true;
          }
        }, error => {

        })
      });

    this.addUserSubject.subscribe(success => {
      this.userService.addUser(this.user).subscribe(response => {
        console.log(response);
      })
    });
  }

  checkUserExist() {
    this.checkUsernameSubject.next();
  }

  registerUser() {
    this.addUserSubject.next();
  }

}
