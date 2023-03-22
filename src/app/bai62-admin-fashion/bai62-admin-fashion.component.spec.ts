import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai62AdminFashionComponent } from './bai62-admin-fashion.component';

describe('Bai62AdminFashionComponent', () => {
  let component: Bai62AdminFashionComponent;
  let fixture: ComponentFixture<Bai62AdminFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai62AdminFashionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai62AdminFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
