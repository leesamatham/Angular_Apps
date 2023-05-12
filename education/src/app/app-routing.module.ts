import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'services',
    component:ServicesComponent
  },
  {
    path:'about',
    component:AboutusComponent
  },
  {
    path:'contact',
    component:ContactusComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'signin',
    component:SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
