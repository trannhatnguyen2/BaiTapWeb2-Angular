import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai18JsonArrayGroupCustomersComponent } from './bai18-json-array-group-customers.component';

describe('Bai18JsonArrayGroupCustomersComponent', () => {
  let component: Bai18JsonArrayGroupCustomersComponent;
  let fixture: ComponentFixture<Bai18JsonArrayGroupCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai18JsonArrayGroupCustomersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai18JsonArrayGroupCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
