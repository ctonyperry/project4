import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
  providers: [UserService]
})
export class UserPageComponent implements OnInit {

  constructor(private userService: UserService) { }

  editingProfile: boolean = false;
  user: any;
  updateUserSubject = new Subject();
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.updateUserSubject.subscribe(succcess=>{
      this.userService.updateUser(this.user).subscribe(response=>{
      localStorage.setItem("user", JSON.stringify(this.user));
      })
    })
  }
  toggleProfileEdit(){
    this.editingProfile = !this.editingProfile;

  }
  saveUserInfo(){

    this.updateUserSubject.next();
    this.toggleProfileEdit();
  }

}
