import { Component, OnInit } from '@angular/core';
import { CustomerHttpService } from '../services/customer-http.service';

@Component({
  selector: 'app-bai18-json-array-group-customers',
  templateUrl: './bai18-json-array-group-customers.component.html',
  styleUrls: ['./bai18-json-array-group-customers.component.css'],
})
export class Bai18JsonArrayGroupCustomersComponent implements OnInit {
  customers: any;
  errMessage: string = '';

  constructor(private _cService: CustomerHttpService) {
    this._cService.getCustomers().subscribe({
      next: (data) => {
        this.customers = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  ngOnInit(): void {}
}
