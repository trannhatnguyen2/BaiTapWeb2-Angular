import { Component, OnInit } from '@angular/core';
import { BookBai54 } from '../interfaces/book_bai54';
import { BookApiBai54Service } from '../services/book-api-bai54.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bai54-book-update',
  templateUrl: './bai54-book-update.component.html',
  styleUrls: ['./bai54-book-update.component.css'],
})
export class Bai54BookUpdateComponent implements OnInit {
  book = new BookBai54();
  books: any;
  errMessage: string = '';

  selectedBook = new BookBai54();

  constructor(
    private _bService: BookApiBai54Service,
    private activateRoute: ActivatedRoute,
    private _router: Router
  ) {
    activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');

      if (id != null) {
        this.searchBook(id);
      }
    });
  }

  ngOnInit(): void {}

  searchBook(bookId: string) {
    this._bService.getBook(bookId).subscribe({
      next: (data) => {
        this.selectedBook = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  putBook() {
    this.selectedBook.ngayCapNhat = `${new Date().getDate()}-${
      new Date().getMonth() + 1
    }-${new Date().getFullYear()}`;
    this._bService.putBook(this.selectedBook).subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
    this.goBack();
  }

  goBack() {
    this._router.navigate(['bai 54']);
  }
}
