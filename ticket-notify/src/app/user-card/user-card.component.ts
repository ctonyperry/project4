import { Subject } from 'rxjs';
import { UserService } from './../user.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from './../types/user';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: User;
  @Output() deleteFromUsers = new EventEmitter<any>();
  editing: boolean = false;
  updateUserSubject = new Subject();
  errorMessage: any;
  gotUpdateError = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.updateUserSubject.subscribe(() => {
      this.userService.updateUser(this.user).subscribe(response => {
        this.gotUpdateError = false;
        this.errorMessage = "";
        this.toggleEdit();
      },
        error => {
          this.gotUpdateError = true;
          this.errorMessage = "Unable to update user";
          console.log(JSON.stringify(error));
        }
      )
    })
  }

  deleteUser() {
    if (confirm("Are you sure you want to delete " + this.user.userName + "?")) {

      this.deleteFromUsers.emit(this.user.id);
    } else {

      console.log("Cancelled delete: " + this.user.userName);
    }

  }
  updateUser() {
    this.updateUserSubject.next();

  }
  toggleEdit() {
    this.editing = !this.editing;
  }
  getErrorMessage() {
    return this.errorMessage;

  }
}
