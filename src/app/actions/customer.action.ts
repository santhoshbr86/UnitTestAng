import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import {Customer} from '../models/customer';

export const  ADD_CUSTOMER = '[Customer] Add';
export const  REMOVE_CUSTOMER = '[Customer] Remove';

export class AddCustomer implements Action {
  readonly type = ADD_CUSTOMER;
  constructor(public payload: Customer) {}
}


export class RemoveCustomer implements Action {
  readonly type = REMOVE_CUSTOMER;
  constructor(private payload: string) {}
}

export type Actions = AddCustomer | RemoveCustomer;