import { ActivatedRoute, RouterModule } from '@angular/router';

import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';
import { RegisterUserFormComponent } from '../register-user-form/register-user-form.component';
import { AdminPageComponent } from '../admin-page/admin-page.component';
import { LogoutPageComponent } from '../logout-page/logout-page.component';
import { UserPageComponent } from '../user-page/user-page.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

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
  
  
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarComponent, RouterModule.forRoot(routes) ],
      providers:[]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should compile', () => {
  //   expect(component).toBeTruthy();
  // });
});
