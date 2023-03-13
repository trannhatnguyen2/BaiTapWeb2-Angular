import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
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
import { Bai19RoutingPageNotFoundComponent } from './bai19-routing-page-not-found/bai19-routing-page-not-found.component';
import { Bai18JsonArrayGroupCustomersComponent } from './bai18-json-array-group-customers/bai18-json-array-group-customers.component';
import { Bai17JsonObjectCustomerServiceComponent } from './bai17-json-object-customer-service/bai17-json-object-customer-service.component';
import { BooksComponent } from './books/books.component';
import { Bai43HttpGetListOfBooksComponent } from './bai43-http-get-list-of-books/bai43-http-get-list-of-books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { Bai46HttpPostCreateBookComponent } from './bai46-http-post-create-book/bai46-http-post-create-book.component';
import { BookNewComponent } from './book-new/book-new.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { Bai54BaitapTonghopRestfulApiComponent } from './bai54-baitap-tonghop-restful-api/bai54-baitap-tonghop-restful-api.component';
import { Bai54BookDetailComponent } from './bai54-book-detail/bai54-book-detail.component';
import { Bai54BookCreateComponent } from './bai54-book-create/bai54-book-create.component';
import { Bai54BookUpdateComponent } from './bai54-book-update/bai54-book-update.component';
import { Bai29ExternalApiNganhangdongaComponent } from './bai29-external-api-nganhangdonga/bai29-external-api-nganhangdonga.component';
import { Bai30ExternalApiProductService1Component } from './bai30-external-api-product-service1/bai30-external-api-product-service1.component';
import { Bai31ExternalApiProductService2Component } from './bai31-external-api-product-service2/bai31-external-api-product-service2.component';
import { Bai32CoindeskApiComponent } from './bai32-coindesk-api/bai32-coindesk-api.component';
import { Bai33GetListPublicApisComponent } from './bai33-get-list-public-apis/bai33-get-list-public-apis.component';
import { Bai34PredictTheGenderComponent } from './bai34-predict-the-gender/bai34-predict-the-gender.component';
import { Bai35GetUsPublicApiComponent } from './bai35-get-us-public-api/bai35-get-us-public-api.component';
import { Bai36RandomDogImagesApiComponent } from './bai36-random-dog-images-api/bai36-random-dog-images-api.component';
import { Bai21LoginScreenComponent } from './bai21-login-screen/bai21-login-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    MyComponentComponent,
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
    Bai19RoutingPageNotFoundComponent,
    Bai18JsonArrayGroupCustomersComponent,
    Bai17JsonObjectCustomerServiceComponent,
    BooksComponent,
    Bai43HttpGetListOfBooksComponent,
    BookDetailComponent,
    Bai46HttpPostCreateBookComponent,
    BookNewComponent,
    BookUpdateComponent,
    BookDeleteComponent,
    Bai54BaitapTonghopRestfulApiComponent,
    Bai54BookDetailComponent,
    Bai54BookCreateComponent,
    Bai54BookUpdateComponent,
    Bai29ExternalApiNganhangdongaComponent,
    Bai30ExternalApiProductService1Component,
    Bai31ExternalApiProductService2Component,
    Bai32CoindeskApiComponent,
    Bai33GetListPublicApisComponent,
    Bai34PredictTheGenderComponent,
    Bai35GetUsPublicApiComponent,
    Bai36RandomDogImagesApiComponent,
    Bai21LoginScreenComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
