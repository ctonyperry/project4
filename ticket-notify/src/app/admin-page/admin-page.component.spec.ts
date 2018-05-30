import { ActivatedRoute, RouterModule, Params } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatLabel, MatError } from '@angular/material/form-field';
import { MatCard, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardHeader, MatFormField } from '@angular/material';
import { UserListComponent } from './../user-list/user-list.component';
import { NavBarComponent } from './../nav-bar/nav-bar.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageComponent } from './admin-page.component';
import { UserCardComponent } from '../user-card/user-card.component';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';
import { RegisterUserFormComponent } from '../register-user-form/register-user-form.component';
import { LogoutPageComponent } from '../logout-page/logout-page.component';
import { UserPageComponent } from '../user-page/user-page.component';

describe('AdminPageComponent', () => {
  let component: AdminPageComponent;
  let fixture: ComponentFixture<AdminPageComponent>;

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
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPageComponent,NavBarComponent,UserListComponent, UserCardComponent, MatCard,
      MatCardTitle, MatCardContent, MatCardSubtitle, MatCardTitle, MatCardHeader, MatLabel, MatFormField, MatInput,
    MatError, RouterModule.forRoot(routes) ],
      imports: [FormsModule],
      providers:[RouterModule,ActivatedRoute]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
