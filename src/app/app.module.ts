import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
