import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai11-json-object-product',
  templateUrl: './bai11-json-object-product.component.html',
  styleUrls: ['./bai11-json-object-product.component.css'],
})
export class Bai11JsonObjectProductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  product = {
    productID: 123,
    productName: 'Thuốc Trị Xàm',
    price: 3000,
    image: 'assets/img/angular.png',
  };
}
