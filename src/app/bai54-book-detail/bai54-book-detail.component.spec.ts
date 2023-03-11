import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai54BookDetailComponent } from './bai54-book-detail.component';

describe('Bai54BookDetailComponent', () => {
  let component: Bai54BookDetailComponent;
  let fixture: ComponentFixture<Bai54BookDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai54BookDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai54BookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
