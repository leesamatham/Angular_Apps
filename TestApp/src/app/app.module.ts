import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestBindingComponent } from './test-binding/test-binding.component';
import { TestDirectivesComponent } from './test-directives/test-directives.component';
import { TestPipesComponent } from './test-pipes/test-pipes.component';
import { TestCommunicationComponent } from './test-communication/test-communication.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { HomeComponent } from './home/home.component';
import { HighlightDirective } from './highlight.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { CountDigitPipe } from './count-digit.pipe';
import { ReactiveProgramComponent } from './reactive-program/reactive-program.component';
import { ReactiveComponent } from './reactive/reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    TestBindingComponent,
    TestDirectivesComponent,
    TestPipesComponent,
    TestCommunicationComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
    HomeComponent,
    HighlightDirective,
    ParentComponent,
    ChildComponent,
    ListProductsComponent,
    CountDigitPipe,
    ReactiveProgramComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
