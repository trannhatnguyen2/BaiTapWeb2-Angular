import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai10BindingTwoWayLYComponent } from './bai10-binding-two-way-ly.component';

describe('Bai10BindingTwoWayLYComponent', () => {
  let component: Bai10BindingTwoWayLYComponent;
  let fixture: ComponentFixture<Bai10BindingTwoWayLYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai10BindingTwoWayLYComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai10BindingTwoWayLYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
