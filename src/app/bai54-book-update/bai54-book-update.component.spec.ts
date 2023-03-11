import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai54BookUpdateComponent } from './bai54-book-update.component';

describe('Bai54BookUpdateComponent', () => {
  let component: Bai54BookUpdateComponent;
  let fixture: ComponentFixture<Bai54BookUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai54BookUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai54BookUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
