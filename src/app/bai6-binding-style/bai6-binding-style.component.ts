import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai6-binding-style',
  templateUrl: './bai6-binding-style.component.html',
  styleUrls: ['./bai6-binding-style.component.css'],
})
export class Bai6BindingStyleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public isError: boolean = false;

  public textStyle = {
    color: 'darkorange',
    fontSize: '26px',
    textTransform: 'uppercase',
  };
}
