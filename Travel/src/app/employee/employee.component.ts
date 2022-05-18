import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApprovelComponent } from '../approvel/approvel.component';
import { PosttravelComponent } from '../posttravel/posttravel.component';
import { ProfileComponent } from '../profile/profile.component';
import { RequestComponent } from '../request/request.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  name:any;
  role:any;
  constructor(private dialogRef:MatDialog,
    private router:Router) {
   this.name=localStorage.getItem("uname");
   this.role=localStorage.getItem("role");
   if(this.role==null )
   {
    this.router.navigateByUrl(""); 
   }
   else if(this.role=='employee'){
    this.router.navigateByUrl("employee"); 
   }
   else{
    this.router.navigateByUrl(""); 
    localStorage.clear();
   }
   }
   open(){
    this.dialogRef.open(ProfileComponent);
   }

   Request(){
    this.dialogRef.open(RequestComponent);
   }

   status(){
    this.dialogRef.open(ApprovelComponent);
   }

   Logout(){
    localStorage.clear();
    this.router.navigateByUrl("");
   }
   paststatus(){
    this.dialogRef.open(PosttravelComponent);
   }

  ngOnInit(): void {
  }

}
