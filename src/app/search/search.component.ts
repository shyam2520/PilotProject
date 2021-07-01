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
    
    // results table creation and styling 
    for(let idx in data)
    {
      console.log(data[idx]);
      var newRow = tbodyRef?.insertRow();
      var empCell=newRow?.insertCell();
      var engCell=newRow?.insertCell();

      // contact name element creationg 
      var empid=document.createElement("p");
      var classicon:string="";
      if(data[idx].mode=="email")
        classicon="far fa-envelope fa-lg ic";
      else if(data[idx].mode=="meeting")
        classicon="far fa-calendar-alt fa-lg ic";
      else if(data[idx].mode=="mobile")
        classicon="fas fa-phone-alt fa-lg ic";
 
      empid.innerHTML=data[idx].employeeId+" <i style=\"float: right; margin:2px\"class=\""+classicon+"\"></i>" ;
      
      //creation of engagement Score 
      var engagement=document.createElement("p");
      var classval:string=""
      var score:any=data[idx].engagementScore;
      if(score>=100)
      {
          // classval="t1";
          engagement.style.backgroundColor="rgb(76, 160, 76)";
          engagement.style.display="inline";
          engagement.style.padding="0.2em 0.5em 0.2em 0.5em";
          engagement.style.borderRadius="0.3em";
      }
      else if(score>=50 && score<100)
      {
        engagement.style.backgroundColor="rgb(80, 121, 247)";
        engagement.style.display="inline";
        engagement.style.padding="0.2em 0.5em 0.2em 0.5em";
        engagement.style.borderRadius="0.3em";

      }
      else if(score<50)
      {
        engagement.style.backgroundColor="rgb(233, 44, 44)";
        engagement.style.display="inline";
        engagement.style.padding="0.2em 0.5em 0.2em 0.5em";
        engagement.style.borderRadius="0.3em";
      }        
        engagement.textContent=score;


        var itag=document.createElement("i");
        itag.style.float="right";
        itag.className="fas fa-ellipsis-h elip";

      empCell?.appendChild(empid);
      engCell?.appendChild(engagement);
      engCell?.appendChild(itag);
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
