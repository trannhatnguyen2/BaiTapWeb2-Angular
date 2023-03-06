import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai9-binding-two-way-qe',
  templateUrl: './bai9-binding-two-way-qe.component.html',
  styleUrls: ['./bai9-binding-two-way-qe.component.css'],
})
export class Bai9BindingTwoWayQEComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public a = 0;
  public b = 0;
  public c = 0;
  public x1: any;
  public x2: any;
  public result: string = '';

  findSolution(): void {
    let quadratic = new quadraticParam(this.a, this.b, this.c);

    let delta =
      quadratic.soB * quadratic.soB - 4 * quadratic.soA * quadratic.soC;

    if (delta > 0) {
      this.x1 = (-quadratic.soB + Math.sqrt(delta)) / (2 * quadratic.soA);
      this.x2 = (-quadratic.soB - Math.sqrt(delta)) / (2 * quadratic.soA);
    } else if (delta == 0) {
      this.x1 = this.x2 = -quadratic.soB / (2 * quadratic.soA);
    } else {
      this.x1 = (-quadratic.soB / (2 * quadratic.soA)).toFixed(2);
      this.x2 = (Math.sqrt(-delta) / (2 * quadratic.soA)).toFixed(2);
    }

    this.result = 'x1= ' + this.x1 + '; x2= ' + this.x2;
  }

  reset() {
    this.a = 0;
    this.b = 0;
    this.c = 0;
    this.result = '';
  }
}

class quadraticParam {
  constructor(public soA: number, public soB: number, public soC: number) {}
}
