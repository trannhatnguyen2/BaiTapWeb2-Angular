import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { IFakeProduct } from '../interfaces/fakeProduct';

@Injectable({
  providedIn: 'root',
})
export class FakeProductRatingService {
  private _url: string = '/products';
  constructor(private _http: HttpClient) {}
  getFakeProductData(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>(this._url, requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<IFakeProduct>),
      retry(3),
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}
