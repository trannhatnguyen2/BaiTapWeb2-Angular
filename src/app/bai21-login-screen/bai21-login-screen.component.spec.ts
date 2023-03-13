import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai21LoginScreenComponent } from './bai21-login-screen.component';

describe('Bai21LoginScreenComponent', () => {
  let component: Bai21LoginScreenComponent;
  let fixture: ComponentFixture<Bai21LoginScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai21LoginScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai21LoginScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
