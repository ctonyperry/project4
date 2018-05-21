import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToiletSearchComponent } from './toilet-search.component';

describe('ToiletSearchComponent', () => {
  let component: ToiletSearchComponent;
  let fixture: ComponentFixture<ToiletSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToiletSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToiletSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
