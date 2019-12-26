import { Component, OnInit } from '@angular/core';
import {ICustomer} from '../models/Customer';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
      firstName: ['', [Validators.required, Validators.minLength(6)]],
      lastName: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  addCustomer() {
    const {value} = this.createForm;
    this.customerService.createCustomer(value).subscribe(next => {
      this.customerService;
      alert('Tạo mới khách hàng thành công!')
      this.createForm.reset({
        fistName: [''],
        lastName: ['']
      });
    });
  }
}
