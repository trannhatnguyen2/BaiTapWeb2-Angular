import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-bai35-get-us-public-api',
  templateUrl: './bai35-get-us-public-api.component.html',
  styleUrls: ['./bai35-get-us-public-api.component.css'],
})
export class Bai35GetUsPublicApiComponent implements OnInit {
  data: any;
  source: any;
  errMessage: string = '';

  constructor(private _http: HttpClient) {
    let params = new HttpParams()
      .set('drilldowns', 'Nation')
      .set('measures', 'Population');

    this._http
      .get<any>('https://datausa.io/api/data', {
        params: params,
        responseType: 'json',
      })
      .subscribe({
        next: (data) => {
          this.data = data.data;
          this.source = data.source[0];
        },
        error: (err) => {
          this.errMessage = err;
        },
      });
  }

  ngOnInit(): void {}
}
