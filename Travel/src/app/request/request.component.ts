import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from '../models/request';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  request:Request;
  role:any;

  constructor(private requestservice:RequestService,
    private router:Router) {
      this.request=new Request();
      this.role=localStorage.getItem("role");
     }

     AddRequest(){
       if(this.role=="employee")
       {
        this.requestservice.EmployeeRequest(this.request).subscribe(sample=>{
          console.log(sample);});
       }
      else if(this.role=='manager')
      {
        this.requestservice.EmployeeRequest(this.request).subscribe(sample=>{
          console.log(sample);});
       
      }
      else if(this.role=="deptment")
      {
        this.requestservice.EmployeeRequest(this.request).subscribe(sample=>{
          console.log(sample);});
      }

      else if(this.role=="facility")
      {
        this.requestservice.EmployeeRequest(this.request).subscribe(sample=>{
          console.log(sample);});
      }
      
     }

     reset(){
       this.request=new Request();
     }

  ngOnInit(): void {
  }

}
