import { HttpClient } from '@angular/common/http';
import { InjectableCompiler } from '@angular/compiler/src/injectable_compiler';
import { Component, INJECTOR, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { observable, Observable } from 'rxjs'
// import { Console } from 'console';
// import { resourceLimits } from 'worker_threads';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service'
// import $ from "";

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
  // employee_data:Employee[];
  results:any;
  employee_name:any;
  employee_email:any;
  eservice:any;
  constructor(  private service:EmployeeService ) {
    // this.employee_data:Observable<Employee>;
   }
   tableresult(data:any)
   {
    var tbodyRef :any = document.getElementById("table_body")?.getElementsByTagName('tbody')[0];
    // console.log(data);
    var tab_remo : any =document.getElementsByTagName('tr');
    var rows:any =tab_remo?.length;
    console.log(rows);

      for(var i=1;i<rows;i++)
        tab_remo[i].innerHTML="";
    // $("#table_of_items tr").remove(); 
    

    for(let idx in data)
    {
      console.log(data[idx]);
      var newRow = tbodyRef?.insertRow();
      var empCell=newRow?.insertCell();
      var engCell=newRow?.insertCell();
      var empid=document.createTextNode(data[idx].employeeId);
      var engagement=document.createTextNode(data[idx].engagementScore);
      empCell?.appendChild(empid);
      engCell?.appendChild(engagement);
    }

   }
   onFormSubmit(f:NgForm) 
   {
    // var emp_data:Employee[]=[];
    this.email=f.value.emailid;
    console.log(this.email);
    this.service.getEmployeeById(this.email).subscribe( data =>{
          this.tableresult(data);
          console.log(data);
          // emp_data.push(data);
          // console.log(emp_data);


    });

    }

  ngOnInit() 
  {
    // console.log(this.eservice.showTasks);
  }
  

}
