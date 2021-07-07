import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Employee } from './employee';  

// After that we write all methods related to consume web in employee.service.ts  
@Injectable({
  providedIn: 'root'
})



export class EmployeeService {  
  url = 'https://pilotwebapi.herokuapp.com/api';  
  // url ="https://localhost:5001/api/";
  constructor(private http: HttpClient) { }  
  getAllEmployee(): Observable<Employee[]> {  
    return this.http.get<Employee[]>(this.url + '/Employee/');  
  }  
  getEmployeeById(employeeId: string): Observable<Employee> {
  
    return this.http.get<Employee>(this.url + '/Employee/' + employeeId);

  }  
  createEmployee(employee: Employee): Observable<Employee> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Employee>(this.url + '/InsertEmployeeDetails/',  
    employee, httpOptions);  
  }  
  updateEmployee(employee: Employee): Observable<Employee> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<Employee>(this.url + '/UpdateEmployeeDetails/',  
    employee, httpOptions);  
  }  
  deleteEmployeeById(employeeid: string): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/Employee/' +employeeid,  
 httpOptions);  
  }  
} 