import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai3-binding',
  templateUrl: './bai3-binding.component.html',
  styleUrls: ['./bai3-binding.component.css'],
})
export class Bai3BindingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  myVar = 'Nhat Nguyen';

  getData() {
    return 'Nhật Nguyên';
  }
}
