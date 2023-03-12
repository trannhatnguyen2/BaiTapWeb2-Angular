export interface ICustomer {
  CustomerTypeId: number;
  CustomerTypeName: string;
  Customers: ICustomerDetail[];
}

export interface ICustomerDetail {
  Id: string;
  Name: string;
  Email: string;
  Age: string;
  Image: string;
}
