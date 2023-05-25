import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-pipes',
  templateUrl: './test-pipes.component.html',
  styleUrls: ['./test-pipes.component.css']
})
export class TestPipesComponent implements OnInit {
  currentDate=new Date();
  amount=200;

  price1=12345.234567;
  price2=12.12;
  num=12345;
  jsonData={id:1,name:"lee",location:"Hyd"}
  fruits=["lee","la","vathi","abc","def","ght"];
  timeChange:string | any;
  title="leelavathi";
    constructor() { }

  ngOnInit(): void { }
}
