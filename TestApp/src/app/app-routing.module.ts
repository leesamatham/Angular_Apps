import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestBindingComponent } from './test-binding/test-binding.component';
import { TestDirectivesComponent } from './test-directives/test-directives.component';
import { TestPipesComponent } from './test-pipes/test-pipes.component';
import { TestCommunicationComponent } from './test-communication/test-communication.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'bind',
    component:TestBindingComponent
  },
  {
    path:'directive',
    component:TestDirectivesComponent
  },
  {
    path:'pipes',
    component:TestPipesComponent
  },
  {
    path:'com',
    component:TestCommunicationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
