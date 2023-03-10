import { Component, OnInit } from '@angular/core';
import { Book } from '../interfaces/book';
import { BookAPIService } from '../services/book-api.service';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css'],
})
export class BookNewComponent implements OnInit {
  book = new Book();
  books: any;
  errMessage: string = '';

  constructor(private _bService: BookAPIService) {
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
}
