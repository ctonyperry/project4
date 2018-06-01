import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule,MatGridListModule,  MatButtonModule, 
         MatSidenavModule, MatIconModule, MatListModule, 
         MatInput, MatCardModule,MatDialogModule, MatCardTitle } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MatLabel, MatFormFieldControl } from '@angular/material/form-field';
import { LayoutModule } from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { EditUserCardComponent } from './edit-user-card/edit-user-card.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NewUserCardComponent } from './new-user-card/new-user-card.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserListComponent } from './user-list/user-list.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserPageComponent } from './user-page/user-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { CarListComponent } from './car-list/car-list.component';
import { AddCarComponent } from './add-car/add-car.component';
import { RegisterUserFormComponent } from './register-user-form/register-user-form.component';

const routes = [
  {
    path: '',
    component: WelcomePageComponent
  },
  {
    path: 'register',
    component: RegisterUserFormComponent
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
    AddCarComponent,
    AdminPageComponent,
    AppComponent,
    CarListComponent,
    EditUserCardComponent,
    LoginFormComponent,
    LogoutPageComponent,
    NavBarComponent,
    NewUserCardComponent,
    RegisterUserFormComponent,
    TicketListComponent,
    UserCardComponent,
    UserListComponent,
    UserPageComponent,
    WelcomePageComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
