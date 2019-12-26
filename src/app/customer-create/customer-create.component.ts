import { Component, OnInit } from '@angular/core';
import {ICustomer} from '../models/Customer';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CustomerService} from '../services/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  private createForm: FormGroup;

  constructor(private fb: FormBuilder, private customerService: CustomerService) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      firstName: [''],
      lastName: ['']
    });
  }
  addCustomer() {
    const {value} = this.createForm;
    this.customerService.createCustomer(value).subscribe(next => {
      this.customerService;
      this.createForm.reset({
        fistName: [''],
        lastName: ['']
      });
    });
  }
}
