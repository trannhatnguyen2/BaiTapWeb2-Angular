import { Component, OnInit } from '@angular/core';
import { FakeProductRatingService } from '../services/fake-product-rating.service';

@Component({
  selector: 'app-bai30-external-api-product-service1',
  templateUrl: './bai30-external-api-product-service1.component.html',
  styleUrls: ['./bai30-external-api-product-service1.component.css'],
})
export class Bai30ExternalApiProductService1Component implements OnInit {
  data: any;
  errMessage: string = '';
  constructor(_service: FakeProductRatingService) {
    _service.getFakeProductData().subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (err) => {
        this.errMessage = err;
        console.log('Không lấy được dữ liẹu');
      },
    });
  }

  ngOnInit(): void {}
}
