import { HttpClient } from '@angular/common/http';
import { InjectableCompiler } from '@angular/compiler/src/injectable_compiler';
import { Component, INJECTOR, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { observable, Observable } from 'rxjs'
// import { Console } from 'console';
// import { resourceLimits } from 'worker_threads';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers:[HttpClient,EmployeeService,]
})
// @NgModule({
//   providers:[HttpClient,EmployeeService]
// })
export class SearchComponent   {
  email:any;
  employee_data=new Observable();
  employee_name:any;
  employee_email:any;
  eservice:any;
  constructor(  private service:EmployeeService ) {
    // this.employee_data:Observable<Employee>;
   }
   onFormSubmit(f:NgForm) 
   {
      console.log("ran");
      this.email=f.value.emailid;

      if(this.email.length>0 && this.email.substring(this.email.length - 3)=="com")
      {  
        console.log(this.email);
        // console.log(this.employee_data.EmployeeName);
        this.service.getEmployeeById(this.email).subscribe( data =>{
          console.log("observable")
          console.log(`employee name ${data.employeeId}`);
          console.log(data);
          this.employee_email=data.employeeId;
          this.employee_name=data.engagmentScore;
        });


      } 
    }

  ngOnInit() 
  {
    // console.log(this.eservice.showTasks);
  }
  

}
