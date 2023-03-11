import { Component, OnInit } from '@angular/core';
import { BookBai54 } from '../interfaces/book_bai54';
import { BookApiBai54Service } from '../services/book-api-bai54.service';

@Component({
  selector: 'app-bai54-baitap-tonghop-restful-api',
  templateUrl: './bai54-baitap-tonghop-restful-api.component.html',
  styleUrls: ['./bai54-baitap-tonghop-restful-api.component.css'],
})
export class Bai54BaitapTonghopRestfulApiComponent implements OnInit {
  book = new BookBai54();
  books: any;
  errMessage: string = '';

  constructor(private _bService: BookApiBai54Service) {
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

  searchBook(bookId: string) {
    this._bService.getBook(bookId).subscribe({
      next: (data) => {
        this.book = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  // create new book
  postBook() {
    this._bService.postBook(this.book).subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  // update book
  putBook() {
    this._bService.putBook(this.book).subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

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
}
