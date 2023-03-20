import { TestBed } from '@angular/core/testing';

import { FakeProductRatingService } from './fake-product-rating.service';

describe('FakeProductRatingService', () => {
  let service: FakeProductRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeProductRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
