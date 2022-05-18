import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApprovelComponent } from '../approvel/approvel.component';
import { PosttravelComponent } from '../posttravel/posttravel.component';
import { ProfileComponent } from '../profile/profile.component';
import { RequestComponent } from '../request/request.component';
import { ViewrequestComponent } from '../viewrequest/viewrequest.component';

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
      this.name=localStorage.getItem("uname");
      if(this.name==null)
      {
        this.router.navigateByUrl("");
      }
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
    this.dialogRef.open(RequestComponent);
   }

   viewCart(){
    this.dialogRef.open(ViewrequestComponent);
   }
   paststatus(){
    this.dialogRef.open(PosttravelComponent);
   }
   status(){
    this.dialogRef.open(ApprovelComponent);
   }

}
