import { Component, OnInit } from '@angular/core';
import { BookApiBai54Service } from '../services/book-api-bai54.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookBai54 } from '../interfaces/book_bai54';

@Component({
  selector: 'app-bai54-book-detail',
  templateUrl: './bai54-book-detail.component.html',
  styleUrls: ['./bai54-book-detail.component.css'],
})
export class Bai54BookDetailComponent implements OnInit {
  book = new BookBai54();
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

  goBack() {
    this._router.navigate(['bai 54']);
  }
}
