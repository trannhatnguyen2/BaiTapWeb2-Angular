import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bai13-json-array-product-event',
  templateUrl: './bai13-json-array-product-event.component.html',
  styleUrls: ['./bai13-json-array-product-event.component.css'],
})
export class Bai13JsonArrayProductEventComponent implements OnInit {
  constructor(_pService: ProductService, private _router: Router) {
    this.products = _pService.getProductWithImages();
  }

  ngOnInit(): void {}

  public products: any;

  viewDetail(f: any) {
    this._router.navigate(['bai 13', f.id]);
  }
  // getProductWithImages
}
