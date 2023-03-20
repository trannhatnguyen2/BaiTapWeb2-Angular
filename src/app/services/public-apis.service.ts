import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { IPublicAPIs } from '../interfaces/publicAPIs';
import { IInforPublicAPIs } from '../interfaces/inforPublicAPIs';

@Injectable({
  providedIn: 'root',
})
export class PublicApisService {
  private _url: string = '/entries';

  constructor(private _http: HttpClient) {}

  getFakeProductData(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };

    return this._http
      .get<IInforPublicAPIs>(this._url, requestOptions)
      .pipe(retry(3), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}
