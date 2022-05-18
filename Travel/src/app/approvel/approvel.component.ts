import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Request } from '../models/request';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-approvel',
  templateUrl: './approvel.component.html',
  styleUrls: ['./approvel.component.css']
})
export class ApprovelComponent implements OnInit {
views:any;
role:any;
id:any;
name:any;
request:Request;
  constructor(private requestservice:RequestService,
    private router:Router,
    private dialogRef:MatDialog) {
      this.request=new Request();
      this.role=localStorage.getItem("role");
    this.name=localStorage.getItem("uname");
    this.id=localStorage.getItem("id");
    if(this.role=='hr'){
      this.requestservice.getAllEmployee().subscribe(data=>{
        console.log(data);
        this.views=data
      }); 
    }
    else{
      this.request=new Request();
      this.request.employeeId=this.id;
      this.requestservice.getByEmployee(this.request).subscribe(data=>{
        console.log(data);
        this.views=data
      }); 
    }
  
   }
   noclick(){
    this.dialogRef.closeAll();
   }

   

  ngOnInit(): void {
  }

}
