import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  products = [
    {
      id: 1,
      name: 'Sữa rửa mặt',
      price: 123000,
      image: 'assets/img/suaruamat.jpg',
    },
    {
      id: 2,
      name: 'Kem nền che khuyết điểm',
      price: 20000,
      image: 'assets/img/kemnenchekhuyetdiem.jpg',
    },
    {
      id: 3,
      name: 'Phấn mắt',
      price: 123000,
      image: 'assets/img/phanmat.jpg',
    },
    {
      id: 4,
      name: 'Xịt khoáng',
      price: 50000,
      image: 'assets/img/xitkhoang.jpg',
    },
    {
      id: 5,
      name: 'Phấn má hồng',
      price: 30000,
      image: 'assets/img/phanmahong.jpg',
    },
    {
      id: 6,
      name: 'Sữa dưỡng thể',
      price: 200000,
      image: 'assets/img/suaduongthe.jpg',
    },
    {
      id: 7,
      name: 'Son môi',
      price: 250000,
      image: 'assets/img/sonmoi.jpg',
    },
    {
      id: 8,
      name: 'Sữa tắm tẩy tế bào chết',
      price: 185000,
      image: 'assets/img/suatamtaytebaochet.png',
    },
    {
      id: 9,
      name: 'Nước tẩy trang',
      price: 179000,
      image: 'assets/img/nuoctaytrang.jpg',
    },
    {
      id: 10,
      name: 'Bút kẻ mắt',
      price: 99000,
      image: 'assets/img/butkemat.jpg',
    },
  ];

  getProductWithImages() {
    return this.products;
  }

  getProductDetail(id: any) {
    return this.products.find((x) => x.id == id);
  }
}
