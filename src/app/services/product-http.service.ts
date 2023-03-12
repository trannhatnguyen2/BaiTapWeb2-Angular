import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductHttpService {
  private _url: string = './assets/data/products.json';

  constructor(private _http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._url);
  }

  getProductsHandleError() {
    return this._http
      .get<IProduct[]>(this._url)
      .pipe(retry(3), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}
