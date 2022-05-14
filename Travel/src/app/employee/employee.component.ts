import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  name:any;
  constructor(private dialogRef:MatDialog,
    private router:Router) {
   this.name=localStorage.getItem("uname");
   if(this.name==null )
   {
    this.router.navigateByUrl(""); 
   }
   }
   open(){
    this.dialogRef.open(ProfileComponent);
   }

   Request(){
    this.router.navigateByUrl("request");
   }

   ViewRequest(){
     
   }

   Logout(){
    localStorage.clear();
    this.router.navigateByUrl("");
   }

  ngOnInit(): void {
  }

}
