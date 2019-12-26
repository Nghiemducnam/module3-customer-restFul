import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRestFulComponent } from './customer-rest-ful.component';

describe('CustomerRestFulComponent', () => {
  let component: CustomerRestFulComponent;
  let fixture: ComponentFixture<CustomerRestFulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerRestFulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRestFulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
