import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTripsMonthsComponent } from './chart-trips-months.component';

describe('ChartTripsMonthsComponent', () => {
  let component: ChartTripsMonthsComponent;
  let fixture: ComponentFixture<ChartTripsMonthsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartTripsMonthsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTripsMonthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
