import { Component, OnInit } from '@angular/core';
import {Store,select} from '@ngrx/store';
import {Customer} from '../../models/customer';
import {Observable} from 'rxjs';
import {AppState} from '../../app.state';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers:Observable<Customer[]>;

  constructor(private store:Store<AppState>) {
    this.customers=store.select('customer');
   }

  ngOnInit() {
  }

}
