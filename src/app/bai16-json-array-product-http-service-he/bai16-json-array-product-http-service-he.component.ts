import { Component, OnInit } from '@angular/core';
import { ProductHttpService } from '../services/product-http.service';

@Component({
  selector: 'app-bai16-json-array-product-http-service-he',
  templateUrl: './bai16-json-array-product-http-service-he.component.html',
  styleUrls: ['./bai16-json-array-product-http-service-he.component.css'],
})
export class Bai16JsonArrayProductHttpServiceHEComponent implements OnInit {
  products: any;
  errMessage: string = '';
  constructor(private _pService: ProductHttpService) {
    this._pService.getProducts().subscribe({
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
