import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Request } from '../models/request';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-ticketbooking',
  templateUrl: './ticketbooking.component.html',
  styleUrls: ['./ticketbooking.component.css']
})
export class TicketbookingComponent implements OnInit {
  request:any;  
  urole:any;
  name:any;

  constructor(private requestservice:RequestService,
    private router:Router,
    private dialogRef:MatDialog) {
      this.urole=localStorage.getItem("role");
      this.name=localStorage.getItem("uname");
      this.requestservice.getAllManager().subscribe(data=>{
        console.log(data);
        this.request=data 
      });
     }
     
     Ok(e:Request){
       e.status="approved"
       this.requestservice.FacilityRequest(e).subscribe(data=>{
         console.log(data);
       });
       this.requestservice.facilityapp(e).subscribe(data=>{
        console.log(data);
      });
  this.dialogRef.closeAll();

    }
   
 ngOnInit(): void {
 }
 noclick(){
  this.dialogRef.closeAll();
 }
 
 reset(){
   this.request=new Request();
 }

}
