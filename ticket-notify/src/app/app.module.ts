import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TicketCardComponent } from './ticket-card/ticket-card.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { EditUserCardComponent } from './edit-user-card/edit-user-card.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewUserCardComponent } from './new-user-card/new-user-card.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserListComponent } from './user-list/user-list.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketCardComponent,
    TicketListComponent,
    EditUserCardComponent,
    LoginFormComponent,
    NavbarComponent,
    NewUserCardComponent,
    UserCardComponent,
    UserListComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
