import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiServiceService {

  constructor(private httpClient:HttpClient) { }

  // News API Call
  newsApiUrl='https://newsapi.org/v2/top-headlines?country=in&apiKey=ed6e7ad0e9024257924efcca720672c7';
  // Tech News API
  techNewsUrl='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=ed6e7ad0e9024257924efcca720672c7';
  // Business News API
  businessNewsUrl= 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ed6e7ad0e9024257924efcca720672c7';
  // Sports News API
  sportsNewsUrl= 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=ed6e7ad0e9024257924efcca720672c7';
  
  // get top heading()
    topHeading():Observable<any>{
    return this.httpClient.get(this.newsApiUrl);
     
    }
    techNews():Observable<any>{
      return this.httpClient.get(this.techNewsUrl);
   }

   businessNews():Observable<any>{
    return this.httpClient.get(this.businessNewsUrl);
   }

   sportsNews():Observable<any>{
    return this.httpClient.get(this.sportsNewsUrl);

   }

}
