import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { ArtListComponent } from './art-list/art-list.component';
import { ArtCardComponent } from './art-card/art-card.component';
import { EditUserCardComponent } from './edit-user-card/edit-user-card.component';
import { NewUserCardComponent } from './new-user-card/new-user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginFormComponent,
    UserListComponent,
    UserCardComponent,
    ArtListComponent,
    ArtCardComponent,
    EditUserCardComponent,
    NewUserCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
