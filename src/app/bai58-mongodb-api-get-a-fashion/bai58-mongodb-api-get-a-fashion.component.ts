import { Component, OnInit } from '@angular/core';
import { Fashion } from '../interfaces/fashion';
import { FashionApiService } from '../services/fashion-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bai58-mongodb-api-get-a-fashion',
  templateUrl: './bai58-mongodb-api-get-a-fashion.component.html',
  styleUrls: ['./bai58-mongodb-api-get-a-fashion.component.css'],
})
export class Bai58MongodbApiGetAFashionComponent implements OnInit {
  fashionId: string = '';
  fashion = new Fashion();
  errMessage: string = '';
  checkValue: boolean = false;

  constructor(
    private _fservice: FashionApiService,
    private activateRoute: ActivatedRoute
  ) {
    activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');

      if (id != null) {
        this.searchFashion(id);
      }
    });
  }

  ngOnInit(): void {}

  searchFashion(fashionId: string) {
    this._fservice.getFashion(fashionId).subscribe({
      next: (data) => {
        this.fashion = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });

    this.checkValue = true;
  }

  clearValue() {
    this.fashionId = '';
    this.checkValue = false;
  }
}
