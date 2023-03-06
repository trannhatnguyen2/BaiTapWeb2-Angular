import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai4-binding-property',
  // templateUrl: './bai4-binding-property.component.html',
  template: `<div>
      Enter your name:
      <input type="text" [id]="nameid" [value]="name" />
    </div>

    <div>
      Enter your email
      <input
        type="text"
        [id]="emailid"
        [value]="email"
        [disabled]="isDisabled"
      />
    </div>`,
  styleUrls: ['./bai4-binding-property.component.css'],
})
export class Bai4BindingPropertyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public name: string = 'Trần Nhật Nguyên';
  public email: string = 'nguyentn20406c@st.uel.edu.vn';
  public nameid: string = 'nameid';
  public emailid: string = 'emailid';
  public isDisabled: boolean = true;
}
