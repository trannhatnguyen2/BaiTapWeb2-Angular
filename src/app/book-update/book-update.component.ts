import { Component, OnInit } from '@angular/core';
import { Book } from '../interfaces/book';
import { BookAPIService } from '../services/book-api.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css'],
})
export class BookUpdateComponent implements OnInit {
  book = new Book();
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
}
