import { Component, OnInit } from '@angular/core';
import { FashionApiService } from '../services/fashion-api.service';

@Component({
  selector: 'app-bai61-mongodb-api-remove-a-fashion',
  templateUrl: './bai61-mongodb-api-remove-a-fashion.component.html',
  styleUrls: ['./bai61-mongodb-api-remove-a-fashion.component.css'],
})
export class Bai61MongodbApiRemoveAFashionComponent implements OnInit {
  // fashionId: string = '';
  fashions: any;
  errMessage: string = '';

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

  deleteFashion(fashionId: any) {
    this._service.deleteFashion(fashionId).subscribe({
      next: (data) => {
        this.fashions = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });

    // load lại bảng dữ liệu sau khi delete
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
}
