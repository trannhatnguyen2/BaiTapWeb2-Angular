import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bai3BindingComponent } from './bai3-binding/bai3-binding.component';
import { Bai4BindingPropertyComponent } from './bai4-binding-property/bai4-binding-property.component';
import { Bai5BindingClassComponent } from './bai5-binding-class/bai5-binding-class.component';
import { Bai6BindingStyleComponent } from './bai6-binding-style/bai6-binding-style.component';
import { Bai7BindingEventComponent } from './bai7-binding-event/bai7-binding-event.component';
import { Bai8BindingTwoWayComponent } from './bai8-binding-two-way/bai8-binding-two-way.component';
import { Bai9BindingTwoWayQEComponent } from './bai9-binding-two-way-qe/bai9-binding-two-way-qe.component';
import { Bai10BindingTwoWayLYComponent } from './bai10-binding-two-way-ly/bai10-binding-two-way-ly.component';
import { Bai11JsonObjectProductComponent } from './bai11-json-object-product/bai11-json-object-product.component';
import { Bai12JsonArrayProductComponent } from './bai12-json-array-product/bai12-json-array-product.component';
import { Bai13JsonArrayProductEventComponent } from './bai13-json-array-product-event/bai13-json-array-product-event.component';
import { Bai14JsonArrayProductCatalogComponent } from './bai14-json-array-product-catalog/bai14-json-array-product-catalog.component';
import { Bai15JsonArrayProductHttpServiceComponent } from './bai15-json-array-product-http-service/bai15-json-array-product-http-service.component';
import { Bai16JsonArrayProductHttpServiceHEComponent } from './bai16-json-array-product-http-service-he/bai16-json-array-product-http-service-he.component';
import { Bai17JsonObjectCustomerServiceComponent } from './bai17-json-object-customer-service/bai17-json-object-customer-service.component';
import { Bai18JsonArrayGroupCustomersComponent } from './bai18-json-array-group-customers/bai18-json-array-group-customers.component';
import { Bai19RoutingPageNotFoundComponent } from './bai19-routing-page-not-found/bai19-routing-page-not-found.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { Bai43HttpGetListOfBooksComponent } from './bai43-http-get-list-of-books/bai43-http-get-list-of-books.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookNewComponent } from './book-new/book-new.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { Bai54BaitapTonghopRestfulApiComponent } from './bai54-baitap-tonghop-restful-api/bai54-baitap-tonghop-restful-api.component';
import { Bai54BookDetailComponent } from './bai54-book-detail/bai54-book-detail.component';
import { Bai54BookCreateComponent } from './bai54-book-create/bai54-book-create.component';
import { Bai54BookUpdateComponent } from './bai54-book-update/bai54-book-update.component';

const routes: Routes = [
  { path: 'bai 3', component: Bai3BindingComponent },
  { path: 'bai 4', component: Bai4BindingPropertyComponent },
  { path: 'bai 5', component: Bai5BindingClassComponent },
  { path: 'bai 6', component: Bai6BindingStyleComponent },
  { path: 'bai 7', component: Bai7BindingEventComponent },
  { path: 'bai 8', component: Bai8BindingTwoWayComponent },
  { path: 'bai 9', component: Bai9BindingTwoWayQEComponent },
  { path: 'bai 10', component: Bai10BindingTwoWayLYComponent },
  { path: 'bai 11', component: Bai11JsonObjectProductComponent },
  { path: 'bai 12', component: Bai12JsonArrayProductComponent },
  { path: 'bai 13', component: Bai13JsonArrayProductEventComponent },
  { path: 'bai 14', component: Bai14JsonArrayProductCatalogComponent },
  { path: 'bai 15', component: Bai15JsonArrayProductHttpServiceComponent },
  { path: 'bai 16', component: Bai16JsonArrayProductHttpServiceHEComponent },
  { path: 'bai 17', component: Bai17JsonObjectCustomerServiceComponent },
  { path: 'bai 18', component: Bai18JsonArrayGroupCustomersComponent },
  { path: 'bai 19', component: Bai19RoutingPageNotFoundComponent },
  { path: 'bai 13/:id', component: MyComponentComponent },
  { path: 'bai 43/books', component: Bai43HttpGetListOfBooksComponent },
  { path: 'books', component: BooksComponent },
  { path: 'book-detail', component: BookDetailComponent },
  { path: 'book-new', component: BookNewComponent },
  { path: 'book-update', component: BookUpdateComponent },
  { path: 'book-delete', component: BookDeleteComponent },
  { path: 'bai 54', component: Bai54BaitapTonghopRestfulApiComponent },
  { path: 'bai 54/book-detail/:id', component: Bai54BookDetailComponent },
  { path: 'bai 54/book-create', component: Bai54BookCreateComponent },
  { path: 'bai 54/book-update/:id', component: Bai54BookUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponents = [
  Bai3BindingComponent,
  Bai4BindingPropertyComponent,
  Bai5BindingClassComponent,
  Bai6BindingStyleComponent,
  Bai7BindingEventComponent,
  Bai8BindingTwoWayComponent,
  Bai9BindingTwoWayQEComponent,
  Bai10BindingTwoWayLYComponent,
  Bai11JsonObjectProductComponent,
  Bai12JsonArrayProductComponent,
  Bai13JsonArrayProductEventComponent,
  Bai14JsonArrayProductCatalogComponent,
  Bai15JsonArrayProductHttpServiceComponent,
  Bai16JsonArrayProductHttpServiceHEComponent,
  Bai17JsonObjectCustomerServiceComponent,
  Bai18JsonArrayGroupCustomersComponent,
  Bai19RoutingPageNotFoundComponent,
  MyComponentComponent,
  Bai43HttpGetListOfBooksComponent,
  BooksComponent,
  BookDetailComponent,
  BookNewComponent,
  BookUpdateComponent,
  BookDeleteComponent,
  Bai54BaitapTonghopRestfulApiComponent,
  Bai54BookDetailComponent,
  Bai54BookCreateComponent,
  Bai54BookUpdateComponent,
];
