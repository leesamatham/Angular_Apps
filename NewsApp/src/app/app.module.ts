import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// API Communication
import { HttpClientModule } from '@angular/common/http';
import { HeadingComponent } from './heading/heading.component';

import { NewsApiServiceService } from './service/news-api-service.service';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    TechNewsComponent,
    BusinessNewsComponent,
    SportsNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [ NewsApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
