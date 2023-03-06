import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai5BindingClassComponent } from './bai5-binding-class.component';

describe('Bai5BindingClassComponent', () => {
  let component: Bai5BindingClassComponent;
  let fixture: ComponentFixture<Bai5BindingClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai5BindingClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai5BindingClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
