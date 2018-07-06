import { Component, OnInit } from '@angular/core';
import {loginUser} from '../../models/userLogin';
import {FormBuilder, Validators,FormGroup} from '@angular/forms';
import {LoginService} from '../../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  signupForm:FormGroup;
  constructor(private fr:FormBuilder,private login:LoginService) { }

  ngOnInit() {
    this.loginForm=this.fr.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })
    this.signupForm=this.fr.group({
      name:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required]
    })
  }
  onSignUp(singupUser){
    console.log(singupUser.value);
    this.login.saveUser(singupUser.value).
    subscribe(
      (res)=>{console.log(res)},
      (err) => {console.log(err)}
    );
  }

}
