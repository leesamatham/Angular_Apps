import { Component, OnInit } from '@angular/core';
import { NewsApiServiceService} from '../service/news-api-service.service'
@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {

  constructor(private techNewsService:NewsApiServiceService) { }
  techTopHeading:any=[];
  ngOnInit(): void {
    this.techNewsService.techNews().subscribe(res=>{
      console.log(res);
      this.techTopHeading=res.articles
      ;
    })
  }

}
