import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerRestFulComponent } from './customer-rest-ful/customer-rest-ful.component';
import {CustomerService} from './services/customer.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerRestFulComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    CustomerDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
