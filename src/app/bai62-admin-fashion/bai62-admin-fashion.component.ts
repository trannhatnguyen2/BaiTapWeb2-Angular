import { Component, OnInit } from '@angular/core';
import { FashionApiService } from '../services/fashion-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bai62-admin-fashion',
  templateUrl: './bai62-admin-fashion.component.html',
  styleUrls: ['./bai62-admin-fashion.component.css'],
})
export class Bai62AdminFashionComponent implements OnInit {
  fashions: any;
  errMessage: string = '';

  constructor(public _service: FashionApiService, private _router: Router) {
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

  createFashion() {
    this._router.navigate(['bai 54/book-create']);
  }

  viewDetail(f: any) {
    this._router.navigate(['bai 54/book-detail', f.maSach]);
  }

  updateFashion(f: any) {
    this._router.navigate(['bai 54/book-update', f.maSach]);
  }

  deleteItem(fashionId: any) {
    if (window.confirm('Are sure you want to delete this item ?')) {
      //put your delete method logic here
      this.deleteFashion(fashionId);
    }
  }
}
