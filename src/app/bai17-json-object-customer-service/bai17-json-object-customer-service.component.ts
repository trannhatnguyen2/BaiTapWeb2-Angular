import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai17-json-object-customer-service',
  templateUrl: './bai17-json-object-customer-service.component.html',
  styleUrls: ['./bai17-json-object-customer-service.component.css'],
})
export class Bai17JsonObjectCustomerServiceComponent implements OnInit {
  customer = {
    Id: 'Cus123',
    Name: 'Obama',
    Email: 'obama@gmail.com',
    Age: 67,
    Image: 'obama.jpg',
  };

  constructor() {}

  ngOnInit(): void {}
}
