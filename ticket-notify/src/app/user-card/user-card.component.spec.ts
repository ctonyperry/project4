import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatLabel } from '@angular/material/form-field';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardComponent } from './user-card.component';
import { MatFormField, MatInput, MatIcon, MatError, MatCardTitle, MatCardSubtitle, MatCardHeader, MatCard } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCardComponent,MatFormField, MatInput, MatIcon, MatError, MatCardTitle,
      MatCardSubtitle, MatCardHeader, MatCard, MatLabel ],
      imports: [FormsModule ],
      providers:[UserService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
