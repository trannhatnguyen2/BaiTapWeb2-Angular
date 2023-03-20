import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PublicApisService } from '../services/public-apis.service';

@Component({
  selector: 'app-bai33-get-list-public-apis',
  templateUrl: './bai33-get-list-public-apis.component.html',
  styleUrls: ['./bai33-get-list-public-apis.component.css'],
})
export class Bai33GetListPublicApisComponent implements OnInit {
  data: any;
  errMessage: string = '';

  constructor(_service: PublicApisService) {
    _service.getFakeProductData().subscribe({
      next: (data) => {
        let temp = JSON.parse(data);
        this.data = temp.entries;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  ngOnInit(): void {}
}
