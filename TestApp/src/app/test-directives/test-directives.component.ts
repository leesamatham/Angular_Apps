import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-test-directives',
  templateUrl: './test-directives.component.html',
  styleUrls: ['./test-directives.component.css']
})
export class TestDirectivesComponent implements OnInit {
  
  myClass="red";
  myClass1="green";
// ngIf
  isStatus=true;
// ngIfElse
  isLogin:boolean=true;
  isLogout:boolean=false;

  logInName="user";

  testArr=["lee","Sara","bin","mah","vin"];

  users:User[]=[
    {
      userId:1,
      userName:'user1'
    },
    {
      userId:2,
      userName:'user2'
    },
    {
      userId:3,
      userName:'user3'
    },
    {
      userId:4,
      userName:'user4'
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
