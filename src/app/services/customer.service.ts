import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Customer } from '../../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private dbPath = '/goatgun';

  customersRef: AngularFireList<Customer> = null;

  constructor(private db: AngularFireDatabase) {
    this.customersRef = this.db.list(this.dbPath);
  }

  createCustomer(customer: Customer): void {
    this.customersRef.push(customer);
  }

  updateCustomer(key: string, value: any): Promise<void> {
    return this.customersRef.update(key, value);
  }

  deleteCustomer(key: string): Promise<void> {
    return this.customersRef.remove(key);
  }

  getCustomersList(): AngularFireList<Customer> {
    return this.customersRef;
  }

  deleteAll(): Promise<void> {
    return this.customersRef.remove();
  }
}
