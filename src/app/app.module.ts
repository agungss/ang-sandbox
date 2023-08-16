import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { GenerateComponent } from './components/generate/generate.component';
import { SearchComponent } from './components/search/search.component';


import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { FormComponent } from './components/form/form.component';



@NgModule({
  declarations: [
    AppComponent,
    ToggleComponent,
    GenerateComponent,
    SearchComponent,
    LoginComponent,
    FormComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
