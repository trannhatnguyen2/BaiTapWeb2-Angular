import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { ICustomer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerHttpService {
  private _url: string = './assets/data/customers.json';

  constructor(private _http: HttpClient) {}

  getCustomers(): Observable<ICustomer[]> {
    return this._http.get<ICustomer[]>(this._url);
  }

  getCustomersHandleError() {
    return this._http
      .get<ICustomer[]>(this._url)
      .pipe(retry(3), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}
