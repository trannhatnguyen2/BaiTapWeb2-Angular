import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai8-binding-two-way',
  templateUrl: './bai8-binding-two-way.component.html',
  styleUrls: ['./bai8-binding-two-way.component.css'],
})
export class Bai8BindingTwoWayComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public name: string = '';
  public address: string = '';
  setDefaultAddress(): void {
    this.address = '13 đường Hùng Vương';
  }
}
