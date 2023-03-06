import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai7-binding-event',
  templateUrl: './bai7-binding-event.component.html',
  styleUrls: ['./bai7-binding-event.component.css'],
})
export class Bai7BindingEventComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public a = 0;
  public b = 0;
  public result: any;

  onSubmit(value: string) {
    alert(value);
  }

  calculate(type: string): void {
    if ((type = 'cong')) {
      this.result = this.a + this.b;
    }
    if ((type = 'tru')) {
      this.result = this.a - this.b;
    }
    if ((type = 'nhan')) {
      this.result = this.a * this.b;
    }
    if ((type = 'chia')) {
      this.result = this.a / this.b;
    }
  }

  reset() {
    this.a = 0;
    this.b = 0;
    this.result = '';
  }
}
