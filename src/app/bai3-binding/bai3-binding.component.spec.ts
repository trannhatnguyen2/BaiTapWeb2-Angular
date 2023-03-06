import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai3BindingComponent } from './bai3-binding.component';

describe('Bai3BindingComponent', () => {
  let component: Bai3BindingComponent;
  let fixture: ComponentFixture<Bai3BindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai3BindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai3BindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
