import { HttpClient, HttpHandler } from '@angular/common/http';
import { TicketListComponent } from './../ticket-list/ticket-list.component';

import { MatCardTitle, MatCardHeader, MatCard } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListComponent } from './car-list.component';

describe('CarListComponent', () => {
  let component: CarListComponent;
  let fixture: ComponentFixture<CarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarListComponent,MatCardTitle, MatCardHeader, TicketListComponent, MatCard ],
      imports:[],
      providers:[HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
