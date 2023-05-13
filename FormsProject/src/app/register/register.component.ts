import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  registerFormObject:any;

  ngOnInit(): void {
    //  Use HTML formContorlName here to attach HTML -> TS
    this.registerFormObject=new FormGroup({
      "firstName":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "lastName":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "email":new FormControl(null,[Validators.required,Validators.email]),
      "password":new FormControl(null,[Validators.required,Validators.minLength(6)]),
      "mobile":new FormControl(null,[Validators.required,Validators.minLength(9),Validators.pattern('[0-9]*')])
      
    })
  }
  submitData(){
    console.log(this.registerFormObject.value);
}

// Get the values for validation
get firstname(){
  return this.registerFormObject.get('firstName');
}
get lastname(){
  return this.registerFormObject.get('lastName');
}
get email(){
  return this.registerFormObject.get('email');
}
get pw(){
  return this.registerFormObject.get('password');
}
get mobilenum(){
  return this.registerFormObject.get('mobile')
}

reset(){
  this.registerFormObject.reset();
  
}
}
