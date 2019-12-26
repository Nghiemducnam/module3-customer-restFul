import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerRestFulComponent} from './customer-rest-ful/customer-rest-ful.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {CustomerDeleteComponent} from './customer-delete/customer-delete.component';


const routes: Routes = [
  {
    path: '', component: CustomerRestFulComponent
  },
  {
  path: 'customers',
  component: CustomerRestFulComponent
},
  {
  path: 'customers/create',
  component: CustomerCreateComponent
}, {
  path: 'customers/:id/edit',
  component: CustomerEditComponent
}, {
    path: 'customers/:id/delete',
    component: CustomerDeleteComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
