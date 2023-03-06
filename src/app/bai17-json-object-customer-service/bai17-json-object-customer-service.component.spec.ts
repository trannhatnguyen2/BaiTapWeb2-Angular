import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai17JsonObjectCustomerServiceComponent } from './bai17-json-object-customer-service.component';

describe('Bai17JsonObjectCustomerServiceComponent', () => {
  let component: Bai17JsonObjectCustomerServiceComponent;
  let fixture: ComponentFixture<Bai17JsonObjectCustomerServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai17JsonObjectCustomerServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai17JsonObjectCustomerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
