import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai8BindingTwoWayComponent } from './bai8-binding-two-way.component';

describe('Bai8BindingTwoWayComponent', () => {
  let component: Bai8BindingTwoWayComponent;
  let fixture: ComponentFixture<Bai8BindingTwoWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai8BindingTwoWayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai8BindingTwoWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
