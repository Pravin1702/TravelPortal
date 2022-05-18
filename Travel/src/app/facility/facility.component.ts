import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApprovelComponent } from '../approvel/approvel.component';
import { PosttravelComponent } from '../posttravel/posttravel.component';
import { ProfileComponent } from '../profile/profile.component';
import { RegisterComponent } from '../register/register.component';
import { RequestComponent } from '../request/request.component';
import { TicketbookingComponent } from '../ticketbooking/ticketbooking.component';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  name:any;

  constructor(private dialogRef:MatDialog,
    private router:Router) { 
      this.name=localStorage.getItem("uname");
      if(this.name==null)
      {
        this.router.navigateByUrl("");
      }
    }

  ngOnInit(): void {
  }

  ViewAllRequest(){
    this.dialogRef.open(TicketbookingComponent);
  }

  open(){
    this.dialogRef.open(ProfileComponent);
   }

  Logout(){
    localStorage.clear();
    this.router.navigateByUrl("");
   }

   request(){
    this.dialogRef.open(RequestComponent);
   }
   paststatus(){
    this.dialogRef.open(PosttravelComponent);
   }
   status(){
    this.dialogRef.open(ApprovelComponent);
   }

}
