import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../services/customer.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ICustomer} from '../models/Customer';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  private editForm: FormGroup;
  customer: ICustomer;

  constructor(private customerService: CustomerService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.editForm = this.fb.group({
      id: [''],
      firstName: ['', [Validators.required, Validators.minLength(6)]],
      lastName: ['', [Validators.required, Validators.minLength(6)]]
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomerById(id).subscribe(
      next => {
        this.customer = next;
        this.editForm.patchValue(this.customer);
      },
      error => {
        console.log(error);
        this.customer = null;
      }
    );
  }
  editCustomer() {
      const { value } = this.editForm;
      this.customerService.updateCustomer(value).subscribe(
        next => {
          alert('Bạn đã sửa thành công!');
          this.router.navigate(['customers']);
        },
        error => console.log(error)
      );
    }
}
