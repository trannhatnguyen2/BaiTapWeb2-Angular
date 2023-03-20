import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai36-random-dog-images-api',
  templateUrl: './bai36-random-dog-images-api.component.html',
  styleUrls: ['./bai36-random-dog-images-api.component.css'],
})
export class Bai36RandomDogImagesApiComponent implements OnInit {
  imageURL: any;
  errMessage: any;
  imageStorage: string[] = [];
  check: boolean = true;
  public _url = 'https://dog.ceo/api/breeds/image/random';

  constructor(private _http: HttpClient) {
    this.randomImage();
  }

  ngOnInit(): void {}

  randomImage() {
    this._http.get<any>(this._url).subscribe({
      next: (data) => {
        this.imageURL = data.message;
        this.imageStorage.push(data.message);
      },
      error: (err) => {
        this.errMessage = err;
      },
    });

    if (this.imageStorage.length > 0) {
      this.check = false;
    }
  }

  priviousImage() {
    this.imageURL = this.imageStorage[this.imageStorage.length - 2];
    this.imageStorage = this.imageStorage.slice(0, -1);
    console.log(this.imageStorage);

    if (this.imageStorage.length == 1) {
      this.check = true;
    }
  }
}
