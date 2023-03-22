import { Component, OnInit } from '@angular/core';
import { FashionApiService } from '../services/fashion-api.service';
import { Fashion } from '../interfaces/fashion';

@Component({
  selector: 'app-bai60-mongodb-api-update-a-fashion',
  templateUrl: './bai60-mongodb-api-update-a-fashion.component.html',
  styleUrls: ['./bai60-mongodb-api-update-a-fashion.component.css'],
})
export class Bai60MongodbApiUpdateAFashionComponent implements OnInit {
  fashion = new Fashion();
  fashions: any;
  errMessage: string = '';
  fashionSelected = new Fashion();

  constructor(private _service: FashionApiService) {
    this._service.getFashions().subscribe({
      next: (data) => {
        this.fashions = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  ngOnInit(): void {}

  putFashion(fashion_id: string) {
    this.searchFashion(fashion_id);
    this.fashions.fashion_image = this.fashionSelected.fashion_image;

    this._service.putFashion(this.fashion).subscribe({
      next: (data) => {
        this.fashions = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });

    // load lại bảng dữ liệu sau khi update
    this.getFashions();
  }

  getFashions() {
    this._service.getFashions().subscribe({
      next: (data) => {
        this.fashions = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  searchFashion(fashion_id: string) {
    this.fashionSelected = new Fashion();

    this._service.getFashion(fashion_id).subscribe({
      next: (data) => {
        this.fashionSelected = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
}
