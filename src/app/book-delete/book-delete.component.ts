import { Component, OnInit } from '@angular/core';
import { BookAPIService } from '../services/book-api.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css'],
})
export class BookDeleteComponent implements OnInit {
  books: any;
  errMessage: string = '';

  constructor(private _bService: BookAPIService) {
    this._bService.getBooks().subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  ngOnInit(): void {}

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
