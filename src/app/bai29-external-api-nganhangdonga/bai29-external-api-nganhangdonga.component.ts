import { Component, OnInit } from '@angular/core';
import { DongABankService } from '../services/dong-abank.service';

@Component({
  selector: 'app-bai29-external-api-nganhangdonga',
  templateUrl: './bai29-external-api-nganhangdonga.component.html',
  styleUrls: ['./bai29-external-api-nganhangdonga.component.css'],
})
export class Bai29ExternalApiNganhangdongaComponent implements OnInit {
  data: any;
  errMessage: string = '';
  constructor(_service: DongABankService) {
    _service.getDongABankData().subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  ngOnInit(): void {}
}
