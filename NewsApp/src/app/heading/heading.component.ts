import { Component, OnInit } from '@angular/core';
import { NewsApiServiceService } from '../service/news-api-service.service';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  constructor(public news:NewsApiServiceService) { }
  topHeadingDisplay:any=[];
  ngOnInit(): void {
    this.news.topHeading().subscribe(res=>{
      console.log(res);
      this.topHeadingDisplay=res.articles;
    })
   }
  }



