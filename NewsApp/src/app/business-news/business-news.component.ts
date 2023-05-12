import { Component, OnInit } from '@angular/core';
import { NewsApiServiceService } from '../service/news-api-service.service';
@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent implements OnInit {

  constructor(private businessNewsService:NewsApiServiceService) { }
businessNewsDisplay:any=[];
  ngOnInit(): void {
    this.businessNewsService.businessNews().subscribe((res)=>{
      console.log(res);
      this.businessNewsDisplay=res.articles;

    });
  }

}
