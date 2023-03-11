import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { IBookBai54 } from '../interfaces/book_bai54';

@Injectable({
  providedIn: 'root',
})
export class BookApiBai54Service {
  constructor(private _http: HttpClient) {}

  // get all books
  getBooks(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };

    return this._http.get<any>('/books-bai54', requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<IBookBai54>),
      retry(3),
      catchError(this.handleError)
    );
  }

  // get book by ID
  getBook(bookId: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/books-bai54/' + bookId, requestOptions).pipe(
      map((res) => JSON.parse(res) as IBookBai54),
      retry(3),
      catchError(this.handleError)
    );
  }

  // post new book
  postBook(aBook: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .post<any>('/books-bai54', JSON.stringify(aBook), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Array<IBookBai54>),
        retry(3),
        catchError(this.handleError)
      );
  }

  // update book by Id
  putBook(aBook: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .put<any>('/books-bai54', JSON.stringify(aBook), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Array<IBookBai54>),
        retry(3),
        catchError(this.handleError)
      );
  }

  // delete book by Id
  deleteBook(bookId: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .delete<any>('/books-bai54/' + bookId, requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Array<IBookBai54>),
        retry(3),
        catchError(this.handleError)
      );
  }

  // handle error
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}
