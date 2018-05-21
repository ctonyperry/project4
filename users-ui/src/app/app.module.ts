import { UserService } from './user.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditUserFormComponent } from './edit-user-form/edit-user-form.component';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { NavbarComponent } from './navbar/navbar.component'

const routes = [
  {
    path: 'adduser',
    component: AddUserFormComponent
  },
  {
    path: 'edituser/:userId',
    component: EditUserFormComponent
  },
  {
    path: 'user/:userId',
    component: UserHomeComponent
  },
{
  path: '',
  component: UserListComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    EditUserFormComponent,
    AddUserFormComponent,
    UserListComponent,
    AddUserComponent,
    UserHomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
