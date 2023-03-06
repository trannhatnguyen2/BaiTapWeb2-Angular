import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bai3BindingComponent } from './bai3-binding/bai3-binding.component';
import { Bai4BindingPropertyComponent } from './bai4-binding-property/bai4-binding-property.component';
import { Bai5BindingClassComponent } from './bai5-binding-class/bai5-binding-class.component';
import { Bai6BindingStyleComponent } from './bai6-binding-style/bai6-binding-style.component';
import { Bai7BindingEventComponent } from './bai7-binding-event/bai7-binding-event.component';
import { Bai8BindingTwoWayComponent } from './bai8-binding-two-way/bai8-binding-two-way.component';
import { Bai9BindingTwoWayQEComponent } from './bai9-binding-two-way-qe/bai9-binding-two-way-qe.component';

const routes: Routes = [
  { path: 'bai 3', component: Bai3BindingComponent },
  { path: 'bai 4', component: Bai4BindingPropertyComponent },
  { path: 'bai 5', component: Bai5BindingClassComponent },
  { path: 'bai 6', component: Bai6BindingStyleComponent },
  { path: 'bai 7', component: Bai7BindingEventComponent },
  { path: 'bai 8', component: Bai8BindingTwoWayComponent },
  { path: 'bai 9', component: Bai9BindingTwoWayQEComponent },
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
];
