export interface IBook {
  bookID: string;
  bookName: string;
  price: number;
  imageURL: string;
}
export class Book {
  constructor(
    public bookId: string = '',
    public bookName: string = '',
    public price: number = 0,
    public imageURL: string = ''
  ) {}
}
