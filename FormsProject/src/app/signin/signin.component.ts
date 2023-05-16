import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signFormObject:any;
  constructor() { }

  ngOnInit(): void {
    this.signFormObject=new FormGroup({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])

    });
  }
  submitSigninData(){
    console.log(this.signFormObject.value)
  }

}
