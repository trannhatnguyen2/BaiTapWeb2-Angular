import { Component, OnInit } from '@angular/core';
import { BookAPIService } from '../services/book-api.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  book: any;
  errMessage: string = '';

  constructor(private _bService: BookAPIService) {}

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
}
