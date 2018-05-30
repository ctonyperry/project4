import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatFormField, MatInput, MatIcon, MatError } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserFormComponent } from './register-user-form.component';
import { FormsModule } from '@angular/forms';

describe('RegisterUserFormComponent', () => {
  let component: RegisterUserFormComponent;
  let fixture: ComponentFixture<RegisterUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterUserFormComponent, MatFormField, MatInput, MatIcon, MatError ],
      imports:[FormsModule, BrowserAnimationsModule],
      providers:[HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
