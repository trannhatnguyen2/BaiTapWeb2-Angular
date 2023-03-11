import { Component, Input, OnInit } from '@angular/core';
import { BookBai54 } from '../interfaces/book_bai54';
import { BookApiBai54Service } from '../services/book-api-bai54.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, finalize } from 'rxjs';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-bai54-book-create',
  templateUrl: './bai54-book-create.component.html',
  styleUrls: ['./bai54-book-create.component.css'],
})
export class Bai54BookCreateComponent implements OnInit {
  book = new BookBai54();
  books: any;
  errMessage: string = '';

  selectedBook = new BookBai54();

  @Input()
  requiredFileType: any;
  fileName = '';
  uploadProgress: number = 0;
  uploadSub: Subscription = new Subscription();

  imageURL: string = '';

  constructor(
    private _bService: BookApiBai54Service,
    private activateRoute: ActivatedRoute,
    private _router: Router,
    private http: HttpClient
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

  postBook() {
    this.book.anhBia = this.imageURL;
    this._bService.postBook(this.book).subscribe({
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

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      this.imageURL = this.fileName;
      const formData = new FormData();
      formData.append('image', file);
      const upload$ = this.http
        .post('/upload', formData, {
          reportProgress: true,
          observe: 'events',
        })
        .pipe(finalize(() => this.reset()));
      this.uploadSub = upload$.subscribe((event) => {
        if (event.type == HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * (event.loaded / event.total!));
        }
      });
    }
  }
  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }
  reset() {
    this.uploadProgress = 0;
    this.uploadSub = new Subscription();
  }
}
