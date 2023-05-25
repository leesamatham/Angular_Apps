import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  productForm: FormGroup;
  constructor(private fb: FormBuilder, 
    private appService: AppService) {
    this.productForm = this.fb.group({
      Id: ["", Validators.required],
      Title: ["", Validators.required],
      Price: [],
      inStock: []
    })
  }
  // constructor() { }

  ngOnInit(): void {
  }
  addProduct() {
    if (this.productForm.valid) {
      this.appService.AddProduct(this.productForm.value);
    }
  }

}
