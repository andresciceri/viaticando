import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTopUsersComponent } from './chart-top-users.component';

describe('ChartTopUsersComponent', () => {
  let component: ChartTopUsersComponent;
  let fixture: ComponentFixture<ChartTopUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartTopUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTopUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
