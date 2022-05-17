import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {
  name:any;

  constructor(private dialogRef:MatDialog,
    private router:Router,
    private requestservice:RequestService) { 
      this.name=localStorage.getItem("uname");
    }

  ngOnInit(): void {
  }

  open(){
    this.dialogRef.open(ProfileComponent);
   }

   AddEmployee(){
    this.router.navigateByUrl("register"); 
   }

   GetAllEmployee(){
     this.router.navigateByUrl("view");
   }

   GetAllTravelEmployee(){
    this.router.navigateByUrl("approvel");
   }

  Logout(){
    localStorage.clear();
    this.router.navigateByUrl("");
   }
   status(){
    this.router.navigateByUrl("status");

   }
   paststatus(){

   }
   GetAllonline(){
    this.router.navigateByUrl("status"); 
   }
   request(){
    this.router.navigateByUrl("request");
   }

}
