import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { RouterLink, Router, RouterState } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userName: any ="";
  userLoginSubject = new Subject();
  user: any;
  errorMessage: any = "";

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  doLogin(){

    this.userLoginSubject
    .subscribe(uid=>
        this.userService.getByUserName(this.userName)
        .subscribe(response => {
          this.user = response;
          if(response==null){
            this.errorMessage = "User Not Found"
          } else{
            this.errorMessage = "";
            this.router.navigateByUrl("/user/" + this.user.id)

          }
        })
    )
    this.userLoginSubject.next();



  }

}
