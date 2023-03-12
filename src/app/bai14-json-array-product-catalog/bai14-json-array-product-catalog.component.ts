import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-bai14-json-array-product-catalog',
  templateUrl: './bai14-json-array-product-catalog.component.html',
  styleUrls: ['./bai14-json-array-product-catalog.component.css'],
})
export class Bai14JsonArrayProductCatalogComponent implements OnInit {
  data: any;
  constructor(private _cataService: CatalogService) {
    this.data = _cataService.getCategories();
  }

  ngOnInit(): void {}
}
