import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  loginFormObject:any;

  ngOnInit(): void {
    this.loginFormObject=new FormGroup({
      email:new FormControl('',[Validators.required])
    ,password:new FormControl('',[Validators.required])
    });
    
  }
submitLoginData(){
  console.log(this.loginFormObject.value)
}
}
