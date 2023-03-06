import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai9BindingTwoWayQEComponent } from './bai9-binding-two-way-qe.component';

describe('Bai9BindingTwoWayQEComponent', () => {
  let component: Bai9BindingTwoWayQEComponent;
  let fixture: ComponentFixture<Bai9BindingTwoWayQEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai9BindingTwoWayQEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai9BindingTwoWayQEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
