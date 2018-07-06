import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators,FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.state';
import * as Customeractions from '../../actions/customer.action';
@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  signupForm:FormGroup;
  constructor(private fr:FormBuilder,private store:Store<AppState>) { 
   
  }

  ngOnInit() {
    this.signupForm=this.fr.group({
      name:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required]
    })
  }
  onSignUp(singupUser){
    console.log(singupUser.value);
    this.store.dispatch(new Customeractions.AddCustomer(singupUser.value));
  }
}
