import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterLayerComponent } from './router-layer.component';

describe('RouterLayerComponent', () => {
  let component: RouterLayerComponent;
  let fixture: ComponentFixture<RouterLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
