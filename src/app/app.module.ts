import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule,HttpClient } from '@angular/common/http'
import { EmployeeService } from './employee.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';

// https://mdbootstrap.com/docs/angular/getting-started/installation/
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    // HttpClient,
    HttpClientModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],

  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
  ],
 
  providers: [HttpClient,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { };