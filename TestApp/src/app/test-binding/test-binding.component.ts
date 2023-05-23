import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-binding',
  templateUrl: './test-binding.component.html',
  styleUrls: ['./test-binding.component.css']
})
export class TestBindingComponent implements OnInit {

  constructor() { }
  testStr="Hello World";
  isChanged=true;
  columnSpan=1;
  testStr1="";
  // Bind the component property to element property
  imgSrc="../assets/img.png";
  // imgAlt='HI';
  // imgHeight="100%";
  // imgWidth="100%";
  myClass="red";
  myStyle="green";
  myName="";
  imgClass="img-class";
  testArr=["lee","la","va","thi"];
  testObj={
    name:"lee",
    location:"hyd",
    Visa:"H1B"
  };
  testObjArr=[
    {
      fname:"lee",
      lname:"kodavati",
      country:"India"
    },
    {
      fname:"Ram",
      lname:"Sam",
      country:"England"
    },
    {
      fname:"Nani",
      lname:"Sami",
      country:"Ireland"
    },
    {
      fname:"Jaanu",
      lname:"Roman",
      country:"Austrelia"
    },
    {
      fname:"Swinn",
      lname:"Pan",
      country:"UAE"
    },
    {
      fname:"Tab",
      lname:"Jobs",
      country:"USA"
    },
    
  ];

  ngOnInit(): void {
  }
  submit(){
    alert(`Thens for clicking me ,You are clicked`);
  }

}
