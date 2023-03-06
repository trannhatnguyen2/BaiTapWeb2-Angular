import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai6BindingStyleComponent } from './bai6-binding-style.component';

describe('Bai6BindingStyleComponent', () => {
  let component: Bai6BindingStyleComponent;
  let fixture: ComponentFixture<Bai6BindingStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai6BindingStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai6BindingStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
