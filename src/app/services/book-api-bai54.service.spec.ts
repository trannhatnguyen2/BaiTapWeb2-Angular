import { TestBed } from '@angular/core/testing';

import { BookApiBai54Service } from './book-api-bai54.service';

describe('BookApiBai54Service', () => {
  let service: BookApiBai54Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookApiBai54Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
