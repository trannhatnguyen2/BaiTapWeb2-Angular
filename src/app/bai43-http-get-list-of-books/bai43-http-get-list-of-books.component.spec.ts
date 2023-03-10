import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai43HttpGetListOfBooksComponent } from './bai43-http-get-list-of-books.component';

describe('Bai43HttpGetListOfBooksComponent', () => {
  let component: Bai43HttpGetListOfBooksComponent;
  let fixture: ComponentFixture<Bai43HttpGetListOfBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai43HttpGetListOfBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai43HttpGetListOfBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
