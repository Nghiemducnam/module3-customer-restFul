import {Component, OnInit} from '@angular/core';
import {ICustomer} from '../models/Customer';
import {FormControl} from '@angular/forms';
import {CustomerService} from '../services/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-rest-ful',
  templateUrl: './customer-rest-ful.component.html',
  styleUrls: ['./customer-rest-ful.component.css']
})
export class CustomerRestFulComponent implements OnInit {
  customerList: ICustomer[] = [];
  inputControl = new FormControl();


  constructor(private customerService: CustomerService,
              private router: Router
  ) {
  }

  ngOnInit() {
    this.customerService.getCustomer().subscribe(next => {
      this.customerList = next;
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    });
  }

  deleteCustomer(i: number) {
    const choice = confirm('Bạn có muốn xóa không');
    if (choice) {
      const post = this.customerList[i];
      this.customerService.deleteCustomer(post.id).subscribe(next => {
        this.customerList = this.customerList.filter(t => t.id !== post.id);
      });
      console.log(post);
    } else {
      this.router.navigate(['customers']);
    }
  }
}

