import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TicketCardComponent } from './ticket-card/ticket-card.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { EditUserCardComponent } from './edit-user-card/edit-user-card.component';
import { LoginFormComponent } from './login-form/login-form.component';

import { NewUserCardComponent } from './new-user-card/new-user-card.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserListComponent } from './user-list/user-list.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule,  MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInput, MatCardModule } from '@angular/material';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserPageComponent } from './user-page/user-page.component';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule, MatLabel, MatFormFieldControl } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { LogoutPageComponent } from './logout-page/logout-page.component';

const routes = [
  {
    path: '',
    component: WelcomePageComponent
  },
  {
    path: 'admin',
    component: AdminPageComponent
  },
  {
    path: 'logout',
    component: LogoutPageComponent
  },
  {
    path: 'profile',
    component: UserPageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TicketCardComponent,
    TicketListComponent,
    EditUserCardComponent,
    LoginFormComponent,
    NewUserCardComponent,
    UserCardComponent,
    UserListComponent,
    WelcomePageComponent,
    AdminPageComponent,
    NavBarComponent,
    UserPageComponent,
    LogoutPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
