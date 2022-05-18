import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApprovelComponent } from '../approvel/approvel.component';
import { PosttravelComponent } from '../posttravel/posttravel.component';
import { ProfileComponent } from '../profile/profile.component';
import { RequestComponent } from '../request/request.component';
import { ViewrequestComponent } from '../viewrequest/viewrequest.component';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
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
      else if(this.role=='manager'){
       this.router.navigateByUrl("manager"); 
      }
      else{
       this.router.navigateByUrl(""); 
       localStorage.clear();
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
