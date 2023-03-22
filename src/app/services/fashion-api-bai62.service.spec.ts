import { TestBed } from '@angular/core/testing';

import { FashionApiBai62Service } from './fashion-api-bai62.service';

describe('FashionApiBai62Service', () => {
  let service: FashionApiBai62Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FashionApiBai62Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
