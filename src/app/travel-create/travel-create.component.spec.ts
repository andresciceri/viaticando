import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelCreateComponent } from './travel-create.component';

describe('TravelCreateComponent', () => {
  let component: TravelCreateComponent;
  let fixture: ComponentFixture<TravelCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
