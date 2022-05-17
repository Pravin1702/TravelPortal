import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';

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
    }

  ngOnInit(): void {
  }

  ViewAllRequest(){
    this.router.navigateByUrl("ticketprovider");
  }

  open(){
    this.dialogRef.open(ProfileComponent);
   }

  Logout(){
    localStorage.clear();
    this.router.navigateByUrl("");
   }

   request(){

   }
   paststatus(){

   }
   status(){
    this.router.navigateByUrl("status");

   }

}
