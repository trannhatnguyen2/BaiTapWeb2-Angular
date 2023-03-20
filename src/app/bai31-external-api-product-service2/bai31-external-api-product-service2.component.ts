import { Component, OnInit } from '@angular/core';
import { FakeProductRatingService } from '../services/fake-product-rating.service';

@Component({
  selector: 'app-bai31-external-api-product-service2',
  templateUrl: './bai31-external-api-product-service2.component.html',
  styleUrls: ['./bai31-external-api-product-service2.component.css'],
})
export class Bai31ExternalApiProductService2Component implements OnInit {
  data: any;
  errMessage: string = '';
  constructor(_service: FakeProductRatingService) {
    _service.getFakeProductData().subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  ngOnInit(): void {}
}
