import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadingComponent } from './heading/heading.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';

const routes: Routes = [
  {
    path:'',
    component:HeadingComponent
  },
  {
    path:'tech',
    component:TechNewsComponent
  },
  {
    path:'business',
    component:BusinessNewsComponent
  },
  {
    path:'sports',
    component:SportsNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
