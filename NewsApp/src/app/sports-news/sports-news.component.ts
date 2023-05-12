import { Component, OnInit } from '@angular/core';
import { NewsApiServiceService} from '../service/news-api-service.service'
@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.css']
})
export class SportsNewsComponent implements OnInit {

  constructor(private sportsService:NewsApiServiceService) { }
sportsNewsDisplay:any=[];
  ngOnInit(): void {
    this.sportsService.sportsNews().subscribe(res=>{
      console.log(res);
      this.sportsNewsDisplay=res.articles;
    })
  }

}
