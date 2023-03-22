import { Component, OnInit } from '@angular/core';
import { Fashion } from '../interfaces/fashion';
import { FashionApiService } from '../services/fashion-api.service';

@Component({
  selector: 'app-bai59-mongodb-api-create-a-fashion',
  templateUrl: './bai59-mongodb-api-create-a-fashion.component.html',
  styleUrls: ['./bai59-mongodb-api-create-a-fashion.component.css'],
})
export class Bai59MongodbApiCreateAFashionComponent implements OnInit {
  fashion = new Fashion();
  errMessage: string = '';

  constructor(private _service: FashionApiService) {}

  public setFashion(f: Fashion) {
    this.fashion = f;
  }

  onFileSelected(event: any, fashion: Fashion) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      fashion.fashion_image = reader.result!.toString();
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  postFashion() {
    this._service.postFashion(this.fashion).subscribe({
      next: (data) => {
        this.fashion = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });

    this.clear();
    // console.log(this.fashion._id);
  }

  clear() {
    this.fashion._id = null;
    this.fashion.style = '';
    this.fashion.fashion_subject = '';
    this.fashion.fashion_detail = '';
    this.fashion.fashion_image = '';
  }
  ngOnInit(): void {}
}
