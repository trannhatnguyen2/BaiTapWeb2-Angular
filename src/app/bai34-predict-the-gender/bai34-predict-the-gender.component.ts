import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai34-predict-the-gender',
  templateUrl: './bai34-predict-the-gender.component.html',
  styleUrls: ['./bai34-predict-the-gender.component.css'],
})
export class Bai34PredictTheGenderComponent implements OnInit {
  name: string = '';
  gender: string = '';
  probability: string = '';
  errMessage: string = '';

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {}

  checkGender() {
    this._http
      .get<any>('https://api.genderize.io/?name=' + this.name)
      .subscribe({
        next: (data) => {
          if (data.gender == 'male') {
            this.gender = 'Nam';
          } else {
            this.gender = 'Nữ';
          }
          this.probability = data.probability;
        },
        error: (err) => {
          this.errMessage = err;
        },
      });
  }
}
