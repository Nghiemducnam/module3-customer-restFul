import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ICustomer} from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private readonly API_URL = 'http://localhost:8080/customers/';

  constructor(private http: HttpClient) { }
  getCustomer(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.API_URL);
  }
  getCustomerById(id: number): Observable<ICustomer> {
    return this.http.get<ICustomer>(`${this.API_URL}/${id}`);
  }
  createCustomer(iCustomer: ICustomer): Observable<ICustomer> {
    return this.http.post<ICustomer>(this.API_URL, iCustomer);
  }
  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
  updateCustomer(iCustomer: ICustomer): Observable<ICustomer> {
    return this.http.put<ICustomer>(`${this.API_URL}/${iCustomer.id}`, iCustomer);
  }
}

