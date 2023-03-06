import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai4BindingPropertyComponent } from './bai4-binding-property.component';

describe('Bai4BindingPropertyComponent', () => {
  let component: Bai4BindingPropertyComponent;
  let fixture: ComponentFixture<Bai4BindingPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai4BindingPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai4BindingPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
