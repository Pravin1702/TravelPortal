import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-departmenthead',
  templateUrl: './departmenthead.component.html',
  styleUrls: ['./departmenthead.component.css']
})
export class DepartmentheadComponent implements OnInit {
  name:any;

  constructor(private dialogRef:MatDialog,
    private router:Router) { 
      this.name=localStorage.getItem("uname");
    }

  ngOnInit(): void {
  }

  open(){
    this.dialogRef.open(ProfileComponent);
   }

  Logout(){
    localStorage.clear();
    this.router.navigateByUrl("");
   }

   Request(){
    this.router.navigateByUrl("request");
   }

   viewCart(){
     this.router.navigateByUrl("view");
   }

}
