import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai7BindingEventComponent } from './bai7-binding-event.component';

describe('Bai7BindingEventComponent', () => {
  let component: Bai7BindingEventComponent;
  let fixture: ComponentFixture<Bai7BindingEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai7BindingEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai7BindingEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
