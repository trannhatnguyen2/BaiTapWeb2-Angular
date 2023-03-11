export interface IBookBai54 {
  maSach: string;
  tenSach: string;
  giaBan: number;
  moTa: string;
  anhBia: string;
  ngayCapNhat: string;
  soLuongTon: number;
  maCD: string;
  maNXB: string;
  nhaXuatBan: string;
  tacGia: string;
  tinhTrang: string;
  kichThuoc: string;
  soTrang: number;
}

export class BookBai54 {
  constructor(
    public maSach: string = '',
    public tenSach: string = '',
    public giaBan: number = 0,
    public moTa: string = '',
    public anhBia: string = '',
    public ngayCapNhat: string = `${new Date().getDate()}-${
      new Date().getMonth() + 1
    }-${new Date().getFullYear()}`,
    public soLuongTon: number = 0,
    public maCD: string = '',
    public maNXB: string = '',
    public nhaXuatBan: string = '',
    public tacGia: string = '',
    public tinhTrang: string = '',
    public kichThuoc: string = '',
    public soTrang: number = 0
  ) {}
}
