import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICoindesk } from '../interfaces/coindesk';

@Component({
  selector: 'app-bai32-coindesk-api',
  templateUrl: './bai32-coindesk-api.component.html',
  styleUrls: ['./bai32-coindesk-api.component.css'],
})
export class Bai32CoindeskApiComponent implements OnInit {
  data: any;
  bpi: any;
  errMessage: string = '';

  constructor(private _http: HttpClient) {
    this._http
      .get<ICoindesk>('https://api.coindesk.com/v1/bpi/currentprice.json')
      .subscribe({
        next: (data) => {
          this.data = data;
          this.bpi = data.bpi;
          console.log(data.bpi);
        },
        error: (err) => {
          this.errMessage = err;
        },
      });
  }

  ngOnInit(): void {}
}
