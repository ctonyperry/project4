import { AdminPageComponent } from './../admin-page/admin-page.component';
import { HttpClient, HttpClientModule, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [UserService]

})
export class LoginFormComponent implements OnInit {

  userName = "ctonyperry";
  password = "letmein";
  checkLoginSubject = new Subject();
  invalidLogin = false;
  errorMessage = "";
  user: any;

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit() {
    this.checkLoginSubject
      .subscribe(uid =>
        this.userService.checkLogin(this.userName, this.password)
          .subscribe(response => {
            if (response == null) {
              this.invalidLogin = true;
              this.errorMessage = "Invalid Login Credentials";
              console.log("Invalid login");

            } else {
              this.invalidLogin = false;
              this.errorMessage = "";
              this.user = response;
              
              //This is a terrible and insecure way to store user data
              //Don't ever do anything like this in production
              localStorage.setItem("user", JSON.stringify(this.user));
              if (this.user.admin) {
                this.router.navigate(['admin']);
              } else {
                this.router.navigate(['profile']);
              }
            }
          }, err => {
            this.invalidLogin = true;
            this.errorMessage = 'Error communicating with user service';
          }
          )
      )

  }
  getErrorMessage() {
    return this.errorMessage;
  }
  checkLogin(userName: any, password: any) {
    this.checkLoginSubject.next();
  }

}
