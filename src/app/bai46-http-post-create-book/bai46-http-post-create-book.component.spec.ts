import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai46HttpPostCreateBookComponent } from './bai46-http-post-create-book.component';

describe('Bai46HttpPostCreateBookComponent', () => {
  let component: Bai46HttpPostCreateBookComponent;
  let fixture: ComponentFixture<Bai46HttpPostCreateBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai46HttpPostCreateBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai46HttpPostCreateBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
