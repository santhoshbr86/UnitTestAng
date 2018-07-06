import { Action } from '@ngrx/store'
import { Customer } from './../models/customer'
import * as Customeractions from './../actions/customer.action';

const intialState:Customer = {
    name:'Customer1',
    email:'customer1@Testability.com',
    password:'encoded',
    phone:9538509090
}

export function reducer(state:Customer[]=[intialState],action:Customeractions.Actions){
    switch(action.type){
        case Customeractions.ADD_CUSTOMER: 
        return [...state,action.payload];
        
        default:return state;
    }
}