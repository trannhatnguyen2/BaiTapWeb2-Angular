import { Component, OnInit } from '@angular/core';
import { ProductHttpService } from '../services/product-http.service';

@Component({
  selector: 'app-bai15-json-array-product-http-service',
  templateUrl: './bai15-json-array-product-http-service.component.html',
  styleUrls: ['./bai15-json-array-product-http-service.component.css'],
})
export class Bai15JsonArrayProductHttpServiceComponent implements OnInit {
  products: any;
  errMessage: string = '';
  constructor(private _service: ProductHttpService) {
    this._service.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  ngOnInit(): void {}
}
