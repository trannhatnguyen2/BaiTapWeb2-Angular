import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai7-binding-event',
  templateUrl: './bai7-binding-event.component.html',
  styleUrls: ['./bai7-binding-event.component.css'],
})
export class Bai7BindingEventComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(value: string) {
    alert(value);
  }

  onCalculate(numberA: Int32Array, numberB: Int32Array) {}
}
