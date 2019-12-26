import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ICustomer} from '../models/Customer';
import {CustomerService} from '../services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {
  customerList: ICustomer[] = [];
  private deleteForm: FormGroup;
  customer: ICustomer;

  constructor(private customerService: CustomerService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
  }


  ngOnInit(): void {
    this.deleteForm = this.fb.group({
      id: [''],
      firstName: [''],
      lastName: ['']
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomerById(id).subscribe(
      next => {
        this.customer = next;
        this.deleteForm.patchValue(this.customer);
      },
      error => {
        console.log(error);
        this.customer = null;
      }
    );
  }

  deleteCustomer() {
    const choice = confirm('Bạn có muốn xóa không?');
    if (choice) {
      const {value} = this.deleteForm;
      console.log(value);
      this.customerService.deleteCustomer(value.id).subscribe(next => {
        alert('Xóa hành công!');
        this.router.navigate(['']);
      });
    }
  }
}

