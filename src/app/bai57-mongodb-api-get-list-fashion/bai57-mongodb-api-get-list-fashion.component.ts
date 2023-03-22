import { Component, OnInit } from '@angular/core';
import { FashionApiService } from '../services/fashion-api.service';

@Component({
  selector: 'app-bai57-mongodb-api-get-list-fashion',
  templateUrl: './bai57-mongodb-api-get-list-fashion.component.html',
  styleUrls: ['./bai57-mongodb-api-get-list-fashion.component.css'],
})
export class Bai57MongodbApiGetListFashionComponent implements OnInit {
  fashions: any;
  errMessage: string = '';

  constructor(public _service: FashionApiService) {
    this._service.getFashions().subscribe({
      next: (data) => {
        this.fashions = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  ngOnInit(): void {}
}
