import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTripsStatusComponent } from './chart-trips-status.component';

describe('ChartTripsStatusComponent', () => {
  let component: ChartTripsStatusComponent;
  let fixture: ComponentFixture<ChartTripsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartTripsStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTripsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
