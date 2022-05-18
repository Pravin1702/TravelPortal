import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Request } from '../models/request';
import { ProfileComponent } from '../profile/profile.component';
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
       this.requestservice.FacilityRequest(e).subscribe(data=>{
         console.log(data);
       });
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
