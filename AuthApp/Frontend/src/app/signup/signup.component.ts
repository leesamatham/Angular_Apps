import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerData:any;
  constructor() { 
    
  }
  ngOnInit(): void {
    this.registerData=new FormGroup({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      confirmPw:new FormControl('',[Validators.required]),
      city:new FormControl('',[Validators.required]),
      zip:new FormControl('',[Validators.required])
     })
  }

  submitData(){
    console.log(this.registerData.value);
    alert('Thanks for submitting');
  }

}
