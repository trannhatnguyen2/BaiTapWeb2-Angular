import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai54BookCreateComponent } from './bai54-book-create.component';

describe('Bai54BookCreateComponent', () => {
  let component: Bai54BookCreateComponent;
  let fixture: ComponentFixture<Bai54BookCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai54BookCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai54BookCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
