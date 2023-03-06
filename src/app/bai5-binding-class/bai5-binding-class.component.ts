import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai5-binding-class',
  templateUrl: './bai5-binding-class.component.html',
  styleUrls: ['./bai5-binding-class.component.css'],
})
export class Bai5BindingClassComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public success = 'text-success';
  public error = 'text-error';
  public primary = 'text-primary';
  public normal = 'text-normal';
  public multiClass = {
    'text-primary': true,
    'text-normal': true,
    'text-error': true,
  };

  public complexity = 'text-complexity';
}
