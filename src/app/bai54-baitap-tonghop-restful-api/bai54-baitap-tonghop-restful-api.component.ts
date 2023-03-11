import { Component, OnInit } from '@angular/core';
import { BookBai54 } from '../interfaces/book_bai54';
import { BookApiBai54Service } from '../services/book-api-bai54.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bai54-baitap-tonghop-restful-api',
  templateUrl: './bai54-baitap-tonghop-restful-api.component.html',
  styleUrls: ['./bai54-baitap-tonghop-restful-api.component.css'],
})
export class Bai54BaitapTonghopRestfulApiComponent implements OnInit {
  book = new BookBai54();
  books: any;
  errMessage: string = '';

  constructor(private _bService: BookApiBai54Service, private _router: Router) {
    _bService.getBooks().subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  ngOnInit(): void {}

  // remove book
  deleteBook(bookId: any) {
    this._bService.deleteBook(bookId).subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  createBook() {
    this._router.navigate(['bai 54/book-create']);
  }

  viewDetail(f: any) {
    this._router.navigate(['bai 54/book-detail', f.maSach]);
  }

  updateBook(f: any) {
    this._router.navigate(['bai 54/book-update', f.maSach]);
  }

  delete(maSach: any) {
    if (window.confirm('Are sure you want to delete this item ?')) {
      //put your delete method logic here
      this.deleteBook(maSach);
    }
  }
}
