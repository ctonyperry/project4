import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatInput } from '@angular/material/input';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatIcon, MatError } from '@angular/material';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';
import { RegisterUserFormComponent } from '../register-user-form/register-user-form.component';
import { AdminPageComponent } from '../admin-page/admin-page.component';
import { LogoutPageComponent } from '../logout-page/logout-page.component';
import { UserPageComponent } from '../user-page/user-page.component';


describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

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
      declarations: [LoginFormComponent, MatInput, MatFormField, MatIcon,
        MatError],
      imports: [FormsModule, BrowserAnimationsModule],
      providers: [HttpClient, HttpHandler,
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy("navigate"); }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
